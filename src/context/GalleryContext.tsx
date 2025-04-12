import { createContext, useReducer } from "react";

export const SET_IMAGES = "SET_IMAGES";
export const SET_ALL_TAGS = "SET_ALL_TAGS";
export const SET_HOVER_INDEX = "SET_HOVER_INDEX";

const initialState = {
  images: [],
  tags: [],
  hoverIndex: -1,
};

const reducer = (state: typeof initialState, action: any) => {
  switch (action.type) {
    case SET_IMAGES:
      return { ...state, images: action.payload };
    case SET_ALL_TAGS:
      return { ...state, tags: action.payload };
    case SET_HOVER_INDEX:
      return { ...state, hoverIndex: action.payload };
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
