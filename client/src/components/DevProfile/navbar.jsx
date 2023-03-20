import { Avatar } from '@mui/material'
import React from 'react'
import { MdLocationSearching, MdOutlineCollectionsBookmark } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import "./navbar.scss"
const navbar = () => {
  const navigate = useNavigate()
  return (
    <div className="devp__navbar">
    <div className="devp__navbar__left">
    <MdOutlineCollectionsBookmark/>
    <p>Collection</p></div>
    <div className="devp__navbar__right">
        <p  onClick={e=>
          navigate("/listingOffers")}><span style={{marginRight:"5px"}}><MdLocationSearching/></span>Find job</p>
        <Avatar sx={{scale:".75"}}>H</Avatar>
        </div>
    </div>
  )
}

export default navbar
