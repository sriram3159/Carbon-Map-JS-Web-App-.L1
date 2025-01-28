import React from "react";
import Navbar from "./components/NavBar";
import MapView from "./components/MapView";
import Stats from "./components/Stats";
import ColorCodeStats from "./components/ColorCodeStats";

const App = () => {
  return (
    <div>
      <Navbar />
      <MapView />
      <Stats/>
      <ColorCodeStats/>
    </div>
  );
};

export default App;
