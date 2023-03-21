import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const LettreE = (props) => {
  const { nodes, materials } = useGLTF("/lettreE.gltf");

  const letterERef = useRef();
  const onPointerEnter = () => {
  
    letterERef.current.position.z = 0.1;
  };

  const onPointerExit = () => {
    letterERef.current.position.z = 0;
  };
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Extrude5.geometry}
        material={materials.PBR}
        position={[0, 0, 0]}
        ref={letterERef}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerExit}
      />
    </group>
  );
};

useGLTF.preload("/lettreE.gltf");
export default LettreE;
