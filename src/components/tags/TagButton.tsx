import { useContext } from "react";
import {
  GalleryContext,
  SET_FILTER_AND_FILTER_IMAGES,
} from "../../context/GalleryContext";

function TagButton({ tag }: { tag: string }) {
  const { dispatch, filter } = useContext(GalleryContext);
  const isActive = filter === tag;
  return (
    <button
      type="button"
      className={`focus:outline-none text-white bg-pink-400 font-medium rounded-2xl text-sm px-5 py-2.5 mb-2 hover:bg-pink-500 ${
        isActive ? "bg-pink-600" : ""
      }`}
      onClick={() => {
        dispatch({ type: SET_FILTER_AND_FILTER_IMAGES, payload: tag });
      }}
    >
      {tag}
    </button>
  );
}
export default TagButton;
