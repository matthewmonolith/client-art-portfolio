import type { ImageData } from "../utils/types";

function ImageContainer({ img }: { img: ImageData }) {
  return (
    <div className="relative hover:z-10 transition-transform duration-300 ease-in-out hover:scale-110">
      <img src={img.image} />
    </div>
  );
}

export default ImageContainer;
