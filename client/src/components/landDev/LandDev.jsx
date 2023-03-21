import { Canvas, useFrame } from "@react-three/fiber";
import react, { Suspense, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import Scene from "./Scene";
import Ground from "./Ground";
import Connect from "./Connect.jsx";
import { Clock } from "three";

const LandDev = () => {
  const [light,setLight]= useState({ligh1 : {},light2 : {}})


  

  const handlLight=()=>{
    // light.light2.position.x +=.5

    // console.log("---------------->",elapsedTime);
    console.log(light.light1.position.x) 

    // console.log('--------------->', light);
  // light &&  (light.light2.position.x -= elapsedTime *20)
  // light && ( light.light1.position.x += elapsedTime *20)
    
  }
  const retrievRef=(light1,light2)=>{
    setLight({light1,light2})
  }
  return (
    <div className="canvas__full">
      <Suspense fallback={null}>
        <Canvas
          shadows
          style={{ width: "100vw", height: "100vh" }}
          fog={new THREE.Fog("#000000", 100, 100)}
        >
          {/* {console.log(light)} */}
          <Connect handlLight={handlLight} />
          <Scene retrievRef={retrievRef} />
          <Ground />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default LandDev;
