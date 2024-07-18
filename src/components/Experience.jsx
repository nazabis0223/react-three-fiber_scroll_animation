/* eslint-disable react/no-unknown-property */
import { OrbitControls, ScrollControls } from "@react-three/drei";
import { NB_FLOORS, Office } from "./Office";

export const Experience = () => {
  return (
    <>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={1} />
      <ScrollControls pages={NB_FLOORS} damping={4} />
      <Office />
    </>
  );
};
