import React from 'react'
import {BiSearchAlt} from "react-icons/bi"
import {  GiPositionMarker} from "react-icons/gi"
import {RiSuitcaseFill} from "react-icons/ri"
const search = () => {
  return (
    <div className="listing__search_bar">
    <div className="div" style={{opacity:"0"}}></div>
     <div className="icon"><BiSearchAlt  style={{color:"#0062ff",marginLeft:"10px",padding:"0px"}}/></div> 
    <input placeholder='what job youre looking for' />
    <div className="div"></div>
    <div className="icon"><  GiPositionMarker  style={{ color:"#0062ff",marginLeft:"5px",padding:"0px"}}/></div> 
 
    <input placeholder='typeof' />
    <div className="div"></div>
    <div className="icon"><  RiSuitcaseFill  style={{ color:"#0062ff",marginLeft:"5px",padding:"0px"}}/></div> 
  
    <input placeholder='what you looking for' />
    <button>Find Job</button>
  </div>
 
  )
}

export default search
