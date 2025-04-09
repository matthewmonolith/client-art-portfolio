function ImageContainer({ url }: { url: string }) {
  return (
    <div className="relative hover:z-10 transition-transform duration-300 ease-in-out hover:scale-110">
      <img src={url} />
    </div>
  );
}

export default ImageContainer;
