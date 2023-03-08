import { Avatar } from '@mui/material'
import React from 'react'
import { MdLocationSearching, MdOutlineCollectionsBookmark } from 'react-icons/md'
import "./navbar.scss"
const navbar = () => {
  return (
    <div className="devp__navbar">
    <div className="devp__navbar__left">
    <MdOutlineCollectionsBookmark/>
    <p>Collection</p></div>
    <div className="devp__navbar__right">
        <p><span style={{marginRight:"5px"}}><MdLocationSearching/></span>Find job</p>
        <Avatar sx={{scale:".75"}}>H</Avatar>
        </div>
    </div>
  )
}

export default navbar
