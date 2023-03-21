import React,{useState,useEffect} from 'react'
import { Pie } from "react-chartjs-2";
const Piechart = () => {
useEffect(() => {
  allData()
},[])
const [applications,setApplications]=useState([])
const [developers,setDevelopers]=useState([])
const []=useState([])


  const allData=async()=>{

    try{
      const result = await fetch('http://localhost:3000/api/dashboard')
      const data = await result.json()
      console.log("all",data.developers)
      setApplications(data.applications)
      setDevelopers(data.developers)
    }
    catch(err){
      console.log(err)
    }
  }
    const data = {
        labels: ["Pending", "Rejected", "Accepted","Interview scheduled"],
        datasets: [
          {
            label: "Applications status",
            data: [applications.filter(app=>app.status==="Pending").length-1,applications.filter(app=>app.status==="Rejected").length-1,applications.filter(app=>app.status==="Accepted").length-1,applications.filter(app=>app.status==="Interview scheduled").length-1],
            backgroundColor: ["#836af8", "#ffe702", "#ff8131","#ff2131"],
            hoverOffset: 4,
          },
        ],
      };
      
      const options = {
        title: {
          display: true,
          text: "Applications status",
        },
      };
      const data1 = {
        labels: ["Fullstack developers", "Backend developers","Frontend developers", "Mobile developers"],
        datasets: [
          {
            label: "Devolopers based on roles",
            data: [developers.filter(dev=>dev.role==="Full-Stack Developer").length,developers.filter(dev=>dev.role==="Backend Developer").length,developers.filter(dev=>dev.role==="Frontend Developer").length,developers.filter(dev=>dev.role==="Mobile Developer").length],
            backgroundColor: ["#836af8", "#ffe702", "#ff8131","#ff2131"],
            hoverOffset: 4,
          },
        ],
      };
      
      const options1 = {
        title: {
          display: true,
          text: "Applications status",
        },
      };
  return (
    <div>
      <h2>Applications current status</h2>
         <Pie data={data} options={options}  class="canvapie"/>
         <br/>
         <h2>Amount of developers based on role</h2>
        <Pie data={data1} options={options1} class="canvapie"/>
        <br/>
    </div>
  )
}

export default Piechart;
