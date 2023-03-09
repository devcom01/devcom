
import React from 'react'
import Barchart from './Barchart'
import DoughnutChart from './DoughnutChart'
import Linechart from './Linechart'
import Piechart from './Piechart'
import Radarchart from './Radarchart'
import Bubblechart from './Bubblechart'
// import AreaChart from './AreaChart'
const Dashboard = () => {
  return (
    <div>
    {/* <div > */}
      {/* <div ><Barchart/></div>
      <div > <Linechart/></div>
      <div ><Piechart/></div>
      <div ><Radarchart/></div>
      <div ><DoughnutChart/></div>
      </div> */}
      <div class="grid grid-cols-2 gap-1  divstat ">
      <div class="bar"><Barchart/></div>
        <div class="line"><Linechart/></div>
        <div class="Pie"> <Piechart/></div>
        <div class="Doughnut"> <DoughnutChart/></div>
        <div class="radar"><Radarchart/></div>
        <div class="bubble"><Bubblechart/></div>
      </div>
     
     
      {/* <AreaChart/> */}
      
      
      
    </div>
  )
}

export default Dashboard
