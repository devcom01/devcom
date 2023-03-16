import React, {useState, useEffect } from 'react';
import {Chart} from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import Barchart from './Barchart';
const Linechart = () => {
  
  const [allInfos,setAllInfos]=useState({})
  const [monthlyInfos,setMonthlyInfos]=useState([])
  const [monthlyApplications,setMonthlyApplications]=useState([])
  
useEffect(() => {
  // allData()
  monthlyData()
},[])
const allData=async()=>{

  try{
    const result = await fetch('http://localhost:3000/api/dashboard')
    const data = await result.json()
    console.log("all",data)
    setAllInfos(data)
  }
  catch(err){
    console.log(err)
  }
}
const monthlyData=async()=>{
try{
  let monthly=await fetch('http://localhost:3000/api/dashboard/monthly')
  let data = await monthly.json()
console.log("monthly",data)
setMonthlyInfos(data.monthly_jobOffers)
setMonthlyApplications(data.monthly_applications)
console.log(monthlyInfos)
}
catch(err){
  console.log('fetch',err)
}
}


    const data = {
      
        labels: ['January', 'February', 'March', 'April', 'May', 'June','July','August','September','October','November','December'],
        datasets: [
          {
            label: 'Monthly job offers Count',
            data:monthlyInfos.map(ele=>ele.job_offers_monthly_count),
            fill: false,
            borderColor:"#2bb66b",
            tension: 0.1,
            pointBackgroundColor:"#fff"
          },
        ],
      };
      const options = {
        responsive: true,
        
        scales: {
          
          y: {
            beginAtZero: true,
          },
        },
      };

      const data1 = {
      
        labels: ['January', 'February', 'March', 'April', 'May', 'June','July','August','September','October','November','December'],
        datasets: [
          {
            label: 'Monthly applications Count',
            data:monthlyApplications.map(ele=>ele.applications_monthly_count
              ),
            fill: true,
            borderColor:"#2bb66b",
            tension: 0.1,
            pointBackgroundColor:"#fff"
          },
        ],
      };
      const options1 = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };
  
  return (
   
    <div>
         <h2>Amount of monthly job offers</h2>
          <Line class= "canvaline" data={data}  options={options}/>
          <br/>
        <h2>Amount of monthly applications </h2>
          <Line class= "canvaline" data={data1}  options={options1}/>
<br/>
    </div>
  )
}

export default Linechart
