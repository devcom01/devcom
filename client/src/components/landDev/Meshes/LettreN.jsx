

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'



const LetterN=(props)=> {
  const { nodes, materials } = useGLTF('/doubleN.gltf')
  const letterNRef=useRef()
  const letterNRef2=useRef()
 
   useFrame(()=>{
  })
  const onPointerEnter=()=>{
 
    letterNRef.current.position.z = 0.1;
    // letterNRef2.current.position.z=0.1

  }
  const onPointerExit=()=>{
    letterNRef.current.position.z=0
 
  }
  const onPointerEnter2=()=>{
    letterNRef2.current.position.z = 0.1;
  

  }
  const onPointerExit2=()=>{
    
    letterNRef2.current.position.z=0
  }


  return (
    <group {...props} dispose={null}   >
      <mesh geometry={nodes.Extrude4.geometry} material={materials.PBR} position={[0, 0, 0]} ref={letterNRef} onPointerEnter={onPointerEnter} onPointerLeave={onPointerExit} />
      <mesh geometry={nodes.Extrude3.geometry} material={materials.PBR} position={[0, 0, 0]}  ref={letterNRef2} onPointerEnter={onPointerEnter2} onPointerLeave={onPointerExit2}/>
    </group>
  )
}

useGLTF.preload('/doubleN.gltf')
export default LetterN
