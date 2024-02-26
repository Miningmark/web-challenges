import React from "react";
import "../styles.css";

export default function Header({ children }) {
  return (
    <header className="header">
        
        {children}
    </header>
  );
}
