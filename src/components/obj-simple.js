import * as THREE from "three";

import { useLoader } from "@react-three/fiber";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'

export default function(props)
{
  const obj = useLoader(OBJLoader, '/portworld.obj')
  return (
    <mesh position={[0, 0, 0]} >
      <primitive object={obj} />
      <meshStandardMaterial attach="material" color="gray" />
    </mesh>
  )
};