function TagButton({ tag }: { tag: string }) {
  return (
    <button
      type="button"
      className="focus:outline-none text-white bg-pink-400 font-medium rounded-2xl text-sm px-5 py-2.5 mb-2 hover:bg-pink-500"
    >
      {tag}
    </button>
  );
}
export default TagButton;
