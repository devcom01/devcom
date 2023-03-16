import React from 'react'
import "./account.scss"
import Navbar from '../../../components/DevProfile/navbar'
import {IoIosArrowBack} from "react-icons/io"
import { Avatar, Badge } from '@mui/material'
import {BsPencilFill} from "react-icons/bs"
import { useNavigate } from 'react-router-dom'
import { userContext } from '../../../usercontext'
const account = () => {
  const navigate=useNavigate()
  
  const user = userContext((state)=>state.user)
  const disconnect= userContext((state)=>state.userLoggedOut)
  return (
    <>
     <Navbar/>
     <div className='account'>
     
      <div className="account__title">
        <div className="return">
          <IoIosArrowBack style={{cursor:'pointer'}} onClick={e=>navigate("/developerProfile")}/>
        </div>
        <h3>My account : </h3>
      </div>
      <div className="pic">
      <Badge
  overlap="circular"
  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
  badgeContent={
   <BsPencilFill style={{border:"2px solid #000",borderRadius:"50%",background:"#d6d6e4",color:"#000"}}/> }
>
  <Avatar sx={{scale:"1.4"}} alt="Travis Howard" />
</Badge>
     <h5>My name</h5>
      </div>
     <div className="content">
     <div className="field">
      <p>Display name</p>
      <div className="info-button">
      <p>Ahmed</p>
      <button>Edit</button>
      </div>

     </div>
     <div className="field">
      <p>Email</p>
      <div className="info-button">
      
      <p>ahmed@gmail.com</p>
      <button>Edit</button>
      </div>
     </div>
     <div className="field">
      <p>Password</p>
      <div className="info-button">
      <p>*******</p>
      <button style={{width:"80px"}}>Change</button>
      </div>
      
     </div>
     </div>
     <div className="subscription">
      
     <button onClick={e=>{disconnect({}) ; navigate("/") }}>sign out </button>
     </div>
     
          </div>
    </>
  )
}

export default account
