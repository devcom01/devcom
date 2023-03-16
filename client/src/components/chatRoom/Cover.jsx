import React, { useEffect, useState } from 'react'
import Matrix from './Matrix.jsx';
import Stack from './Stack.jsx';
import Header from "./Header.jsx"
import {userContext} from "../../usercontext"
import axios from "axios"



import "./Header.css"



const Cover = () => {
    const fetch = userContext(state=>state.user)
    // console.log('====>',fetch);
    const [usero,setUsero]=useState(fetch.user.email)
    const [fetchUser,setfetchUser]=useState([])

    useEffect(()=>{
        const userget=async()=>{
           const getuser= await axios.get(`http://localhost:3000/api/developers/getone/${usero}`)
           setfetchUser(getuser.data)
        }
          userget()
    },[])
    // console.log("--------------> id",usero);
    // console.log("---------------> data", fetchUser);

    return (
        <div>
          <Header fetchUser={fetchUser}/>
       
        <Matrix/>
        <Stack fetchUser= {fetchUser}/>
        </div>
      );
    }


export default Cover
