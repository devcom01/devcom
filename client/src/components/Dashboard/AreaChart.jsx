import React from 'react'

import { Area } from "react-chartjs-2";

const AreaChart = () => {
    const data = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: "Sales",
            data: [1200, 1500, 1000, 2000, 1500, 1800, 2500],
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 2,
          },
        ],
      };
      const options = {
        title: {
          display: true,
          text: "Monthly Sales Report",
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      };
     
  return (
    <div>
       <Area data={data} options={options} />
    </div>
  )
}

export default AreaChart
