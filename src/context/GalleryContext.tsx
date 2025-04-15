import { act, createContext, useReducer } from "react";
import { ImageData } from "../utils/types";

export const SET_IMAGES = "SET_IMAGES";
export const SET_ALL_TAGS = "SET_ALL_TAGS";
export const SET_HOVER_INDEX = "SET_HOVER_INDEX";
export const SET_FILTER = "SET_FILTER";
export const SET_FILTER_AND_FILTER_IMAGES = "SET_FILTER_AND_FILTER_IMAGES";

const initialState: {
  images: ImageData[];
  filteredImages: ImageData[];
  tags: string[];
  hoverIndex: number;
  filter: string;
} = {
  images: [],
  filteredImages: [],
  tags: [],
  hoverIndex: -1,
  filter: "",
};

const reducer = (state: typeof initialState, action: any) => {
  switch (action.type) {
    case SET_IMAGES:  
      return { ...state, images: action.payload, filteredImages: action.payload };
    case SET_ALL_TAGS:
      return { ...state, tags: action.payload };
    case SET_HOVER_INDEX:
      return { ...state, hoverIndex: action.payload };
    case SET_FILTER_AND_FILTER_IMAGES: {
      const toggledFilter =
        state.filter === action.payload ? "" : action.payload;

      const filteredImages = toggledFilter
        ? state.images.filter((img) =>
            img.tags.split(",").includes(toggledFilter)
          )
        : state.images;
      return {
        ...state,
        filter: toggledFilter,
        filteredImages,
      };
    }

    default:
      return state;
  }
};

const GalleryContext = createContext({
  ...initialState,
  dispatch: (_: any) => {},
});

function Provider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GalleryContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GalleryContext.Provider>
  );
}

export { GalleryContext, Provider };
