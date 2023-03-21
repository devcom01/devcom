import React from 'react'
import GrandC from "./Meshes/GrandC"
import LettreN from './Meshes/LettreN.jsx'
import LetterT from './Meshes/LettreT.jsx'
import LettreO from './Meshes/LettreO.jsx'
import LettreE from './Meshes/LettreE.jsx'
import PetitC from './Meshes/PetitC.jsx'
const Connect = ({handlLight}) => {
  return (
    <group>
        <GrandC handlLight={handlLight}/>
        <LettreO/>
        <LettreN/>
        <LettreE/>
        <PetitC/>
        <LetterT/>      
    </group>
  )
}

export default Connect
