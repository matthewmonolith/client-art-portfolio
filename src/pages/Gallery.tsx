import Masonry from "react-masonry-css";
import { fetchImages } from "../utils/supabase";
import { useEffect, useState } from "react";
import type { Bucket } from "@supabase/storage-js";

function Gallery() {
  const [images, setImages] = useState<Bucket | null>(null);

  useEffect(() => {
    const loadBucket = async () => {
      const res = await fetchImages();
      console.log('fetching images');
      
      setImages(res);
    };

    loadBucket();
  }, []);

  return (
    <Masonry
      breakpointCols={3}
      className="masonry-grid"
      columnClassName="masonry-grid_column"
    >
      {images ? "Images loaded!" : "Loading..."}
    </Masonry>
  );
}
export default Gallery;
