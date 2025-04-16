import TagButton from "./TagButton";

function Tags({ tags }: { tags: string[] }) {
  const renderedTags = tags.map((tag) => {
    return <TagButton tag={tag} key={tag}/>;
  });
  return <div className="mt-6 text-center sm:flex sm:flex-row justify-center gap-1 ms-6 sm:ms-0">{renderedTags}</div>;
}
export default Tags;
