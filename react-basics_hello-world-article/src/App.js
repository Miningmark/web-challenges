import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorldArticle/>;
}


function HelloWorldArticle(){
  const article = (<article><Heading/><Paragraph/></article>);
  return article;
}

function Heading() {
  const heading = <h1>Hello World!</h1>
  return heading;
}
function Paragraph() {
  const paragraph = <p>I&apos;m a paragraph!</p>;
  return paragraph;
}
