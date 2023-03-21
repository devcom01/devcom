import React, { useCallback, useRef } from 'react'
import { useGLTF } from '@react-three/drei'


const LetterUc=(props)=> {
  const lettreCRef=useRef()
 
  const onPointerEnter=()=>{
   
    // lettreCRef.current.position.z = 0.1;
    props.handlLight()
  }
  const onPointerExit=()=>{
    // lettreCRef.current.position.z=0
    // props.handlLight()

  }
  
  
  const { nodes, materials } = useGLTF('/grandC.gltf')
  return (
    <group {...props} onPointerLeave={()=>onPointerExit()} onPointerEnter={()=>{onPointerEnter()}} ref={lettreCRef}   >
      <mesh geometry={nodes.Extrude2.geometry} material={materials.PBR}  onPointerLeave={()=>onPointerExit()} onMouseOut={()=>{onPointerEnter()}} ref={lettreCRef}  />
    </group>
  )
}

useGLTF.preload('/grandC.gltf')
export default LetterUc