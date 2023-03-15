import React from 'react';
import {Chart} from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
const Linechart = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            label: 'Sales',
            data: [12, 19, 3, 5, 2, 3],
            fill: false,
            borderColor:"#5b6fde",
      
            tension: 0.1,
          },
        ],
      };
      const options = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };
  
    //   const chart = new Chart('myChart', {
    //     type: 'line',
    //     data: data,
    //     options: options,
    //   });
  
  return (
   
    <div>
         
          <Line class= "canvaline" data={data}  options={options}/>
        
 

    </div>
  )
}

export default Linechart
