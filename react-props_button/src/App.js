import React from "react";
import "./styles.css";

export default function App() {
  return <Button textColor="blue" disabled={false} text="Hello" buttonClick={handleClick}/>;
}

function Button({ textColor, disabled, text, buttonClick }) {
  const button = (
    <button
      style={{
        backgroundColor: "lightblue",
        color: textColor,
        height: "100px",
      }}
      disabled={disabled}
      onClick={buttonClick}
    >
      {text}
    </button>
  );
  return button;
}

function handleClick(event){
  console.log(event); 
  alert("You clicked me!");
}
