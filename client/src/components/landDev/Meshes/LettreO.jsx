import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const LettreO = (props) => {
  const { nodes, materials } = useGLTF("/lettreO.gltf");
  
  const letterORef = useRef();

  const onPointerEnter = () => {
  
    letterORef.current.position.z = 0.1;
  };

  const onPointerExit = () => {
    letterORef.current.position.z = 0;
  };
  return (
    <group
      {...props}
      dispose={null}
    
      
    >
      <mesh
        geometry={nodes.Extrude1.geometry}
        material={materials.PBR}
        position={[0, 0, 0]}
        ref={letterORef}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerExit}
        
      />
    </group>
  );
};

useGLTF.preload("/lettreO.gltf");
export default LettreO;
