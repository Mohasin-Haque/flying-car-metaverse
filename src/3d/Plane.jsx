import React from "react";
import { DoubleSide } from "three";

export default function Plane(props) {
  return (
    <mesh {...props} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[50, 20]} side={DoubleSide} />
      <meshStandardMaterial color="grey" />
    </mesh>
  );
}
