//import { useState } from 'react'
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { ScrollControls } from "@react-three/drei";
import { NB_FLOORS } from "./components/Office";

function App() {
  return (
    <Canvas
      camera={{
        fov: 94,
        position: [3.3, 2.5, 2.3],
      }}
    >
      <ScrollControls pages={NB_FLOORS} damping={1}>
        <Experience />
      </ScrollControls>
    </Canvas>
  );
}

export default App;
