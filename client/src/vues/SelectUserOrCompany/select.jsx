import React, { useEffect } from 'react'
import "./select.scss"
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import gsap from 'gsap'
const select = () => {
  const navigate = useNavigate();
  const localtion=useLocation()
  

  useEffect(()=>{
    if (localtion.pathname=='/'){ 
  gsap.set('.cursor',{xPercent:-50,yPercent:-50})
    window.addEventListener("mousemove",e=>{
      gsap.to('.cursor',0.2,{x:e.clientX,y:e.clientY})
    },[])
  }
  },[]
  )
  return (

    <div className='signup__select'>
      <div className="cursor"></div>
      <div className="text">
      <p>{"function check (visitor) {"}</p>
      <p>{"if (VISITOR === 'Developer'){   "}</p>
      <p>{"PLEASE PRESS DEVELOPER"}</p>
      <p>{"} else{"}</p>
      <p style={{color:"yellow"}}>{"WE ASSUME THAT YOU'RE A COMPANY THEN , WHAT A PLEASURE ! PLEASE PRESS THE COMPANY BUTTON BELOW "}<span style={{color:"#2e9795"}}>{"}"}</span></p>
    </div>
    <div className="choices">
      <button onClick={e=>  navigate("/companyHome")  }>COMPANY</button>
      <button onClick={e=>  navigate("/devHome")} > DEVELOPER</button>
    </div>
    </div> )
}

export default select
