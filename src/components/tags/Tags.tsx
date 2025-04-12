import TagButton from "./TagButton";

function Tags({ tags }: { tags: string[] }) {
  const renderedTags = tags.map((tag) => {
    return <TagButton tag={tag} key={tag}/>;
  });
  return <div className="mt-6 ms-6 text-center flex justify-center gap-3">{renderedTags}</div>;
}
export default Tags;
