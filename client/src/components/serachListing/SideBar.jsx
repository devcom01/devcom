import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import React, { useState } from 'react'
import { MdOutlineArrowDropDown } from 'react-icons/md'

const SideBar = () => {
    const [listing,setlistig]=useState({
        1:true ,
        2:true,
        3:true,
        4:true
      })
    
    return (
    <div className="listing__sideBar">
        <div className="listing__side__alert">
          <h4>Create job alert</h4>
          <p>create alert now and never miss a job</p>
          <input placeholder=' Enter a keyword' type="text"  />
          <button>create job alert</button>
        </div>
        <div className="listing__side_options">
          
         
       <h4 onClick={e=>setlistig(list=>({...list,1:!list[1]}))} style={{cursor:"pointer"}}>Type of Employment <span><MdOutlineArrowDropDown style={{cursor:"pointer"}} /></span></h4>
      
       {listing[1] &&
        <FormGroup>
  <FormControlLabel  onClick={e=>console.log(e.target)} control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 16} }} />} label="Full time jobs" />
  <FormControlLabel  control={<Checkbox sx={{'& .MuiSvgIcon-root': { fontSize: 16} }} />} label="Part time jobs" />
  <FormControlLabel  control={<Checkbox sx={{'& .MuiSvgIcon-root': { fontSize: 16} }} />} label="remote jobs" />
  <FormControlLabel  control={<Checkbox sx={{'& .MuiSvgIcon-root': { fontSize: 16} }} />} label="internship" />
</FormGroup>}
<h4 onClick={e=>setlistig(list=>({...list,2:!list[2]}))} style={{cursor:"pointer"} }>Seniority level <span><MdOutlineArrowDropDown style={{cursor:"pointer"}} /></span></h4>
{listing[2] &&
        <FormGroup>
        <FormControlLabel control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 16} }} />} label="Student level" />
        <FormControlLabel  control={<Checkbox sx={{'& .MuiSvgIcon-root': { fontSize: 16} }} />} label="Entry level" />
        <FormControlLabel  control={<Checkbox sx={{'& .MuiSvgIcon-root': { fontSize: 16} }} />} label="Mid level" />
        <FormControlLabel  control={<Checkbox sx={{'& .MuiSvgIcon-root': { fontSize: 16} }} />} label="Senior level" />
      </FormGroup>}
       
       </div>
      </div>
  )
}

export default SideBar
