import React, { useEffect, useState } from 'react'
// import Matrix from './Matrix.jsx';
import Stack from './Stack.jsx';
import LandDev from '../landDev/LandDev.jsx';
// import Header from "./Header.jsx"
import {userContext} from "../../usercontext"
import axios from "axios"


import "./Header.css"



const Cover = () => {
    const fetch = userContext(state=>state.user)
    // console.log('====>',fetch);
    const [usero,setUsero]=useState(fetch)
    const [fetchUser,setfetchUser]=useState([])

    useEffect(()=>{
        const userget=async()=>{
           const getuser= await axios.get(`http://localhost:3000/api/developers/getone/${usero.user.email}`)
           setfetchUser(getuser.data)
        }
          userget()
    },[])
    // console.log("--------------> id",usero.user.email);
    // console.log("---------------> data", fetchUser);

    return (
        <div className='wrapper_ofall'>
          {/* <Grid fetchUser={fetchUser[0]}/> */}
          {/* <Header fetchUser={fetchUser}/> */}
      
        {/* <Matrix/> */}
        {/* <LandDev/>  */}

        <Stack fetchUser= {fetchUser[0]}/>
         <LandDev/> 
         </div>
      );
    }


export default Cover
