import { useLayoutEffect, useRef, useState } from 'react'

import { useFrame } from '@react-three/fiber'
import { useGLTF } from "@react-three/drei";

function Overlay(props)
{
  const { scene } = useGLTF('/portworld-overlay.glb')
  useLayoutEffect(() => scene.traverse(o => o.isMesh && (o.castShadow = o.receiveShadow = true)), [])

  const [mycounter, setCount] = useState(0)
  const ref = useRef();

  return <primitive ref={ref}
            
            onClick={() => {
              console.log(ref)
            }}
            object={scene}
             {...props} 
          />
};

function TextBio(props)
{
  const { scene } = useGLTF('/portworld-text.glb')
  // useLayoutEffect(() => scene.traverse(o => o.isMesh && (o.castShadow = o.receiveShadow = true)), [])

  const [mycounter, setCount] = useState(0)
  const ref = useRef();

  useFrame(({ mouse }) => {

    if (!ref.current) {
      return;
    }
    setCount(mycounter+1)

    ref.current.rotation.z = -(mycounter * 0.002 ) + ((mouse.x) * 1)
    // ref.current.position.z = Math.sin(mycounter * 0.002 ) 
      // ref.current.rotation.x = -mouse.y * 0.01
    // ref.current.position.y = Math.sin(mycounter * 0.0005 ) 


     // if (mouse.x > 0.33 && mouse.y > 0.33)
     // {
      // ref.current.rotation.z = mouse.y * 2
      // ref.current.rotation.z = mouse.y * 2
     // }
   });


  return <primitive ref={ref}
            
            onClick={() => {
              console.log(ref)
            }}
            object={scene}
             {...props} 
          />
};

export default function(props)
{
  const { scene } = useGLTF('/portworld.glb')
  useLayoutEffect(() => scene.traverse(o => o.isMesh && (o.receiveShadow = true)), [])

  const [mycounter, setCount] = useState(0)
  const ref = useRef();

  // useFrame(({ mouse }) => {
  //    if (mouse.x > 0.33 && mouse.y > 0.33)
  //    {
  //     ref.current.rotation.y += (-mouse.y * 0.01 + mouse.x * 0.8) * 0.001
  //    }
  //  });


  // useFrame(({ mouse }) => {
    // if (!ref.current) {
    //   return;
    // }
    // setCount(mycounter+1)
    // console.log(mycounter)
    // camera.position.x = Math.sin(mycounter * 0.002 ) * 2
    // ref.current.rotation.z = ( Math.cos(mycounter * 0.04 ) / 1.5 ) - ( mouse.x * 0.5 )
  // })

  return <>
    <TextBio /> 
    <Overlay /> 
    <primitive ref={ref}
            
            onClick={() => {
              console.log(ref)
            }}
            object={scene}
             {...props} 
          />
  </>
};