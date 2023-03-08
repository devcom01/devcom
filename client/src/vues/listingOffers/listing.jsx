import React, { useState } from 'react'
import "./listing.scss"
import {RiDashboardFill} from "react-icons/ri"
import {MdOutlineArrowDropDown} from "react-icons/md"
import {Badge,Avatar, Checkbox, FormGroup, FormControlLabel} from "@mui/material"
import { green } from '@mui/material/colors'
import Search from '../../components/serachListing/search'
import SideBar from '../../components/serachListing/SideBar'
import ListingAll from '../../components/serachListing/ListingAll'
const listing = () => {
  return (
    <div className='listing'>
      <div className="listing__Navbar">
        <div className="listing__Navbar__logo">ConnectLogo</div>
        <div className="listing__Navbar__choices">
            <p>Find Job</p>
            <p>Hunt bugs</p>
            <p>Chat Rooms</p>
        </div>
        <div className="listing__Navbar__options">
            <RiDashboardFill style={{paddingRight : "5px" , borderRight:"1px solid #fff"}}/>
            <div className="userInfo">
            <Avatar sx={{transform:"scale(.75)" , margin:"0px",padding:"0px"}}>H</Avatar>

              <p>Ahmed Chammakhi</p>
              <MdOutlineArrowDropDown/>
            </div>
        </div>

      </div>
      <Search/>
      <SideBar/>
      <ListingAll/>
    </div>
  )
}

export default listing
