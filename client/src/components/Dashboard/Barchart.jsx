import React from 'react'
import { Bar } from 'react-chartjs-2';

import { Chart } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    PointElement,
    registerables
  } from "chart.js";
  ChartJS.register(BarElement, CategoryScale, LinearScale, PointElement,...registerables);




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

              "#ffcf5c"
            ],
            borderColor: [
              "#ffcf5c"
            ],
            borderWidth: 1,
          },
          
        ],
      };
    const  options= {
        scales: {
            y: {
                beginAtZero: true
            },
        },
    };
      
  return (
    <div>
        
  
 
  <Bar data={data}  options={options}/>
  
 
        
         </div>
    
  
  )
}

export default Barchart
