import React, { useRef, useState, useEffect } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { LineBasicMaterial } from "three";
import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import axios from "axios";

const Scene = ({retrievRef}) => {
  const [stack, setStack] = useState([]);
  const[kais,setKais]=useState({})



  const apiKey = "AIzaSyANQNOCqOsHj7blDe3BQ5vHhQbLfU6XdyI"
  const apiUrl = `https://www.googleapis.com/webfonts/v1/webfonts?key=${apiKey}`
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(apiUrl);
        const json = await response.json();
        setKais(json);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);
// console.log(kais);
// const firacode = kais.items.filter((fam, idx)=>{
//   fam.family ==='Fira Code'
// })


  const meshRef = useRef();
  const pointLightRef = useRef();
  const pointLightRef2 = useRef();
  const ambiantRef = useRef();
  const orbitRef = useRef();
  const cameraRef = useRef();

  const graph = () => {
    let a;

    for (i = 0; i < 100; i++) {
      for (j = 0; i < 100; j++) {}
    }
  };

  useEffect(() => {
    pointLightRef.current.intensity += 2;
    pointLightRef2.current.intensity += 5;
    ambiantRef.current.intensity += 10;

    const getStack = async () => {
      try {
        const stack = await axios.get(
          `http://localhost:3000/api/chatRoom/getStack`
        );
        setStack(stack.data);
      } catch (err) {
        console.log(err);
      }
    };
    getStack();
    retrievRef(pointLightRef.current,pointLightRef2.current)
  }, []);

  console.log("--3D", stack);
  useFrame(({ clock }) => {
    const elapsed = clock.elapsedTime;
    if (elapsed <= 10) {
      pointLightRef.current.intensity = elapsed / 0.5;
      pointLightRef2.current.intensity = elapsed / 0.5;
      ambiantRef.current.intensity = elapsed / 0.5;
    } else {
      pointLightRef.current.intensity = 10;
      ambiantRef.current.intensity = 30;
    }
  });
  console.log(orbitRef.curent);
  function AnimatedText(props) {
    const [rotation, setRotation] = useState(0);
    const [direction, setDirection] = useState(1);

    useFrame(() => {
      setRotation((rotation) => rotation + 0.01);

      orbitRef.current.minAzimuthAngle = -Math.PI / 4;
      orbitRef.current.maxAzimuthAngle = Math.PI / 4;
      orbitRef.current.minPolarAngle = 0;
      orbitRef.current.maxPolarAngle = Math.PI / 2;
    });
    const reverseRotation = () => {
      setDirection((direction) => direction * -1);
    };

    return (
      <Text
        {...props}
        ref={meshRef}
        onClick={() => reverseRotation}
        onPointerOut={() => reverseRotation()}
        onPointerOver={() => reverseRotation()}
      />
    );
  }
  return (
    <>
      <perspectiveCamera
        ref={cameraRef}
        position={[0.1, 8, -0.2]}
        makeDefault={true}
      />
      <OrbitControls
        target={[0, 0.5, 0]}
        maxPolarAngle={50}
        args={[cameraRef.current]}
        ref={orbitRef}
      />

      <color args={[0, 0, 0]} attach="background" />

      {/* <ambientLight /> */}
      <pointLight position={[1, 1, 1]} ref={ambiantRef} />
      <spotLight
        ref={pointLightRef}
        color={[1, 0.25, 0.7]}
        // intensity={4}
        angle={0.6}
        penumbra={0.5}
        position={[5, 10, -20]}
        receiveShadow
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        ref={pointLightRef2}
        color={[0.14, 0.5, 1]}
        angle={0.6}
        penumbra={0.5}
        position={[5, 10, 20]}
        castShadow
        shadow-bias={-0.0001}
        intensity={5}
      />
      {console.log(pointLightRef2)}
      <AnimatedText
        font="https://fonts.googleapis.com/css?family=Roboto"
        fontSize={0.6}
        color="#3067a6"
        position={[0, 1.5, 0.3]}
        rotation={[0, 0, 0]}
        depth={1}
        bevelEnabled={true}
        bevelSize={0.3}
        bevelThickness={0.3}
        curveSegments={12}
        
      >
        Welcom to...
      </AnimatedText>
      <AnimatedText
        font="#3067a6"
        fontSize={0.15}
        color="#3067a6"
        position={[0, -0.2, 0.3]}
        rotation={[0, 0, 0]}
        depth={1}
        bevelEnabled={true}
        bevelSize={0.3}
        bevelThickness={0.3}
        curveSegments={12}
        // background={true}
      >
        Connecting developers and companies to build a brighter future together
      </AnimatedText>
      {stack &&
        stack.map((sta, idx) => {
          return (
            <AnimatedText
              key={idx}
              font="#3067a6"
              fontSize={0.15}
              color="black"
              rotation={[-Math.PI / 2, 0, 0]}
              position={[-idx + 5, -0.99, 2]}
              // rotation={[0, 0, 0]}
              depth={1}
              bevelEnabled={true}
              bevelSize={0.3}
              bevelThickness={0.3}
              curveSegments={12}
              // background={true}
            >
              {sta.name}
            </AnimatedText>
          );
        })}
    </>
  );
};

export default Scene;
