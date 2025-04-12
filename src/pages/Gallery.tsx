import Masonry from "react-masonry-css";
import { fetchImages } from "../utils/supabase";
import { useEffect, useContext } from "react";
import ImageContainer from "../components/ImageContainer";
import Tags from "../components/tags/Tags";

import {
  GalleryContext,
  SET_ALL_TAGS,
  SET_IMAGES,
} from "../context/GalleryContext";
import { ImageData } from "../utils/types";

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

function Gallery() {
  const { dispatch, images, tags, hoverIndex } = useContext(GalleryContext);

  useEffect(() => {
    const init = async () => {
      const res = await fetchImages();

      const tagsArr = res
        ?.map((img) => img.tags.split(","))
        .flat()
        .filter((t, i, a) => a.indexOf(t) == i);

      dispatch({
        type: SET_IMAGES,
        payload: res,
      });

      dispatch({
        type: SET_ALL_TAGS,
        payload: tagsArr,
      });
    };

    init();
  }, [dispatch]);

  const renderedImages = images?.map((img: ImageData) => {
    return <ImageContainer img={img} key={img.image}/>;
  });

  return (
    <>
      <Tags tags={tags}/>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        {renderedImages}
      </Masonry>
    </>
  );
}
export default Gallery;
