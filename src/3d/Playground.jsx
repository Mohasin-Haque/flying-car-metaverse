import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Car } from "./Car";
import { MonsterCar } from "./MonsterCar";
import Plane from "./Plane";

export default function Playground() {
  return (
    <Canvas>
      <Car rotation={[0, -Math.PI, 0]} />
      <MonsterCar rotation={[0, -Math.PI, 0]} />
      <OrbitControls />
      <Stars />
      <ambientLight intensity={1} />
      <directionalLight intensity={1} position={[1, 0, 1]} />
      <Plane position={[0, -0.5, 0]} />
    </Canvas>
  );
}
