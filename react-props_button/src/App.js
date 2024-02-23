import React from "react";
import "./styles.css";

export default function App() {
  function handleClick(event){
    console.log(event); 
    alert("You clicked me!");
  }
  return <Button textColor="blue" text="Hello" buttonClick={handleClick}/>;
}



function Button({ textColor, disabled, text, buttonClick }) {
  const style = {
    backgroundColor: "lightblue",
    color: textColor,
    height: "100px",
  };
  
  return (
    <button
      style={style}
      disabled={disabled}
      onClick={buttonClick}
    >
      {text}
    </button>
  );
}


