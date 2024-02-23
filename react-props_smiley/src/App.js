import React from "react";
import "./styles.css";

export default function App() {
  return <Smiley isHappy={false}/>;
}

function Smiley({isHappy}){
  const smiley = <h1>{isHappy ? "🐡" : "🐠"}</h1>
  return smiley;
}