import { MeshReflectorMaterial } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { LinearEncoding, TextureLoader,RepeatWrapping } from "three";
import axios from "axios";

const Ground = () => {
const planRef=useRef()  

const [roughness, normal]=useLoader(TextureLoader,[
    "textures/rough_plasterbrick.jpg",
    "textures/rough_plasterbrick_05_nor_gl_4k.jpg"
])

useEffect(()=>{
    [normal,roughness].forEach((tex)=>{
        tex.wrapS = RepeatWrapping;
        tex.wrapT = RepeatWrapping;
        tex.repeat.set(5,5)
    })
    normal.encoding=LinearEncoding;

},[normal,roughness])

console.log(planRef.current);


  return (
    <mesh rotation-x={-Math.PI/2} castShadow receiveShadow position={[0,-1,0]} ref={planRef}>
      <planeGeometry args={[50, 50]} />
      <MeshReflectorMaterial
        fog={true}
        envMapIntensity={0}
        normalMap={normal}
        normalScale={[0.15,0.15]}
        roughnessMap={roughness}
        // dithering={true}
        color={[0.015, 0.015, 0.015]}
        roughness={0.7}
        blur={[1000,400]}
        mixBlur={30}
        mixStrength={80}
        mixContrast={1}
        resolution={1024}
        mirror={0}
        depthScale={0.01}
        minDepthThreshold={0.9}
        maxDepthThreshold={1}
        depthToBlurRatioBias={0.25}
        debug={0}
        reflectorOffset={0.01}
        // emissiveIntensity={0.01}
        // opacity={10}
        
      />
    </mesh>
  );
};

export default Ground;
