import React from "react";
import "./styles.css";

export default function App() {
  return <Article/>;
}

function Article() {
  const article = <article className="article"><Heading/><Label/><Input/><Anchor/></article>;
  
  return article;
}

function Heading(){
  const heading = <h2 className="article__title">Hello World</h2>;
  return heading;
}
function Label(){
  const label = <label htmlFor="inputField">Im a Label </label>;
  return label;
}
function Input(){
  const input = <input id="inputField"></input>;
  return input;
}
function Anchor(){
  const anchor = <a className="article__link" href="https://github.com/Miningmark" target="_black"> Im a Anchor</a>;
  return anchor;
}
