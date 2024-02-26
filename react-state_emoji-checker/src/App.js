import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [code, setCode] = useState("");

  const validCode = "🐡🐠🐋";

  const handleClick = (emoji) => {
    setCode((prevCode) => prevCode + emoji); 
  };

  const resetCode = () => {
    setCode("");
  };

  return (
    <div className="container">
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            console.log("Update Code!");
            handleClick("🐡");
          }}
        >
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            console.log("Update Code!");
            handleClick("🐋");
          }}
        >
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            console.log("Update Code!");
            handleClick("🐠");
          }}
        >
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>{" "}
      </div>

      <button
        type="button"
        onClick={() => {
          console.log("Reset Code!");
          resetCode("");
        }}
      >
        Reset
      </button>

      {code === validCode && <p>Valid code!</p>}
    </div>
  );
}
