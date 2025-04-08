import Masonry from "react-masonry-css";
import { fetchImages } from "../utils/supabase";
import { useEffect, useState } from "react";
import ImageContainer from "../components/ImageContainer";

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

function Gallery() {
  const [images, setImages] = useState<string[] | null>(null);

  useEffect(() => {
    const loadBucket = async () => {
      const res = await fetchImages();
      console.log("fetching images");

      setImages(res);
    };

    loadBucket();
  }, []);

  const renderedImages = images?.map((u) => {
    return <ImageContainer url={u} />;
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
