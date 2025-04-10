import Masonry from "react-masonry-css";
import { fetchImages } from "../utils/supabase";
import { useEffect, useState } from "react";
import ImageContainer from "../components/ImageContainer";
import type { ImageData } from "../utils/types";

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

function Gallery() {
  const [images, setImages] = useState<ImageData[] | null>(null);


  
  useEffect(() => {
    const loadImages = async () => {
      const res = await fetchImages()
      setImages(res)
    };

    loadImages();
  }, []);

  const renderedImages = images?.map((img) => {
    return <ImageContainer url={img.image} />;
  });

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="masonry-grid"
      columnClassName="masonry-grid_column"
    >
      {renderedImages}
    </Masonry>
  );
}
export default Gallery;
