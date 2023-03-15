import React from 'react'
import { Pie } from "react-chartjs-2";
const Piechart = () => {
    const data = {
        labels: ["Red", "Blue", "Yellow"],
        datasets: [
          {
            label: "My First Dataset",
            data: [300, 50, 100],
            backgroundColor: ["#836af8", "#ffe702", "#ff8131"],
            hoverOffset: 4,
          },
        ],
      };
      
      const options = {
        title: {
          display: true,
          text: "My Pie Chart",
        },
      };
  return (
    <div>
      
         <Pie data={data} options={options}  class="canvapie"/>
 
    </div>
  )
}

export default Piechart
