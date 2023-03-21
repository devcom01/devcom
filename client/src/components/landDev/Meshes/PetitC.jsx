import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const PetitC=(props)=> {
  const petiCRef=useRef()
  const { nodes, materials } = useGLTF('/petiC.gltf')
  const onPointerEnter = () => {
    // console.log(lettreCRef.current);
    petiCRef.current.position.z = 0.1;
  };

  const onPointerExit = () => {
    petiCRef.current.position.z = 0;
  };
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Extrude6.geometry} material={materials.PBR} position={[0, 0, 0]} ref={petiCRef} onPointerEnter={onPointerEnter} onPointerLeave={onPointerExit} />
    </group>
  )
}

useGLTF.preload('/petiC.gltf')
export default PetitC