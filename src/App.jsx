//import { useState } from 'react'
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { ScrollControls } from "@react-three/drei";
import { NB_FLOORS } from "./components/Office";
import { Cards } from "./components/Cards";

function App() {
  return (
    <Canvas
      camera={{
        fov: 45,
        position: [3.5, 1.2, 2.3],
      }}
    >
      <ScrollControls pages={NB_FLOORS} damping={1}>
        <Cards />
        <Experience />
      </ScrollControls>
    </Canvas>
  );
}

export default App;
