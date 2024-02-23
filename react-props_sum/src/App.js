import React from "react";
import "./styles.css";

export default function App() {
  return <Sum valueA={2} valueB={3}/>;
}


function Sum({valueA, valueB}){
  const sum = <h1>{valueA} + {valueB} = {valueA + valueB}</h1>;
  return sum;
}