import { Avatar } from '@mui/material'
import React from 'react'
import Navbar from '../../components/DevProfile/navbar'
import "./devp.scss"
import {BsFillPersonFill} from "react-icons/bs"
import {ImNewspaper} from "react-icons/im"
import {GiJeweledChalice} from "react-icons/gi"

const DevProfile = () => {
  return (
    <div className='devp__all'>
      <Navbar/>
      <div className="devp__Content">
        <h2>Collections : </h2>
        <div className="devp__content__listing">
            <div className="container">
                <div className="avatar">
                    <BsFillPersonFill style={{scale:"2"}}/>
                </div>
                <div className="text">
                    <h3>Personal info</h3>
                </div>
            </div>
            <div className="container">
                <div className="avatar" style={{backgroundColor:"#70c4bf"}}>
                    <ImNewspaper style={{scale:"2",color:"#000"}}/>
                </div>
                <div className="text">
                    <h3>Manage my cv</h3>
                </div>
            </div>
            <div className="container">
                <div className="avatar" style={{backgroundColor:"#d9c478"}}>
                    <GiJeweledChalice style={{scale:"2",}}/>
                </div>
                <div className="text">
                    <h3>My Toy Problems</h3>
                </div>
            </div>
        </div>
      </div>
        </div>
     
  )
}

export default DevProfile
