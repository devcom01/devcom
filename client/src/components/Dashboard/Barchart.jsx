import React from 'react'
import { Bar } from 'react-chartjs-2';

import { Chart } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    PointElement,
  } from "chart.js";
  ChartJS.register(BarElement, CategoryScale, LinearScale, PointElement);




// import { Chart as ChartComponent, registerables } from 'react-chartjs-2';
// Chart.register(...registerables);



 
const Barchart = () => {
    
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Sales',
            data: [12,1, 3, 5, 2, 3, 7],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1,
          },
        ],
      };
      
  return (
    <div>
        <div className=" bar w-full h-80"> 
        {/* <div className="rounded-md bg-white shadow-md">
  <div className="bg-gray-100 p-4">
    <h3 className="text-lg font-semibold text-gray-700">Card Title</h3>
  </div>
  <div className="p-4"> */}
     <Bar data={data}  />
  {/* </div> */}
{/* </div> */}
        
         </div>
    
    </div>
  )
}

export default Barchart
