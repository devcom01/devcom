import React from 'react'
import { Doughnut } from "react-chartjs-2";
const DoughnutChart = () => {
    const data = {
        labels: ["Red", "Blue", "Yellow"],
        datasets: [
          {
            label: "My First Dataset",
            data: [300, 50, 100],
            backgroundColor: [
              "rgb(133, 105, 241)",
              "rgb(164, 101, 241)",
              "rgb(101, 143, 241)",
            ],hoverOffset: 4,
          },
        ],
      };
      
      const options = {
        title: {
          display: true,
          text: "My Doughnut Chart",
        },
      };
  return (
    <div>
      
       <Doughnut data={data} options={options}  class="canvadou"/>
  
    </div>
  )
}

export default DoughnutChart
