import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const LettreT=(props)=> {
  const { nodes, materials } = useGLTF('/lettreT.gltf')
  const letterTRef=useRef()

  const onPointerEnter = () => {
    // console.log(lettreCRef.current);
    letterTRef.current.position.z = 0.1;
  };

  const onPointerExit = () => {
    letterTRef.current.position.z = 0;
  };
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Extrude.geometry} material={materials.PBR} position={[0, 0, 0]} ref={letterTRef} onPointerEnter={onPointerEnter} onPointerLeave={onPointerExit} />
    </group>
  )
}

useGLTF.preload('/lettreT.gltf')
export default LettreT
