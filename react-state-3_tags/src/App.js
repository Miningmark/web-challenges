import { useState } from "react";
import "./styles.css";
import Form from "./components/Form/index.js";
import List from "./components/List/index.js";

export default function App() {
  const [tags, setTags] = useState(["JavaScript", "React", "CSS", "HTML"]);

  function handleAddTags(newTag){
    setTags([...tags, newTag]);
  }

  function handleDeleteTags(deleteTag){
    setTags(tags.filter((tag) => tag !== deleteTag));
  }

  return (
    <main className="app">
      <Form onAddTag={handleAddTags}/>
      <List tags={tags} onDeleteTag={handleDeleteTags} />
    </main>
  );
}
