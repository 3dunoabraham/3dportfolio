import { usePlane } from "@react-three/cannon";

export default function(props)
{
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -10, 0],
  }));
  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]}
      receiveShadow
    >
      <planeBufferGeometry attach="geometry" args={[20,20]} />
      <meshStandardMaterial attach="material" color="lightblue" />
    </mesh>
  );
};