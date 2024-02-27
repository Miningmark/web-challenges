import "./Tag.css";

export default function Tag({ tag }) {
  const isHighlightTag = (tag === 'admin');
  console.log(tag, isHighlightTag);
  return <li className={`tag ${isHighlightTag ? 'tag--highlight' : ''}`}>{tag}</li>;
}
