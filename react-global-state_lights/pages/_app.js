import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initialLights = [
  { id: 0, isOn: false, name: "Living Room" },
  { id: 1, isOn: false, name: "Kitchen" },
  { id: 2, isOn: false, name: "Bedroom" },
  { id: 3, isOn: false, name: "Bathroom" },
  { id: 4, isOn: false, name: "Garage" },
  { id: 5, isOn: false, name: "Porch" },
  { id: 6, isOn: false, name: "Garden" },
  { id: 7, isOn: false, name: "Office" },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialLights);

  const lightsOn = lights.reduce((acc, light) => (light.isOn ? acc + 1 : acc), 0);
  //console.log("lightsOn", lightsOn);
  //console.log("lights", lights);

  function handleSetLight(lightID) {
    setLights(
      lights.map((light) => (light.id === lightID ? { ...light, isOn: !light.isOn } : light))
    );
  }

  function handleAllLights(setStatus) {
    setLights(
      lights.map((light) => {
        return { ...light, isOn: setStatus };
      })
    );
  }

  return (
    <Layout>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        toggleLight={handleSetLight}
        lightsOn={lightsOn}
        onAllLights={handleAllLights}
        isDimmed={lightsOn === 0 ? true : false}
      />
    </Layout>
  );
}
