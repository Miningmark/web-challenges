import "./styles.css";

export default function App() {
  return <Greeting name="Dömser"/>;
}

function Greeting({name}){
  const greeting = <h1>Hello {name == "Dömser" ? "Coatch!" : name}</h1>
  return greeting;
}
