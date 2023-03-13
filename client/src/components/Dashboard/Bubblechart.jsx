import React from 'react'
import { Bubble } from 'react-chartjs-2';
const Bubblechart = () => {
    const data = {
        datasets: [
          {
            label: 'First Dataset',
            data: [
              { x: 20, y: 30, r: 15 },
              { x: 40, y: 10, r: 10 },
              { x: 30, y: 25, r: 20 },
              { x: 10, y: 40, r: 25 },
            ],
            backgroundColor: ["#836af8","#ffe702"],
            borderColor:  ["#836af8","#ffe702"],
          },
        ],
      };
      const options = {
        scales: {
          y: {
            suggestedMin: 0,
            suggestedMax: 50,
          },
          x: {
            suggestedMin: 0,
            suggestedMax: 50,
          },
        },
      };
  return (
    <div>
        <Bubble class="canvabubble" data={data} options={options} />
    </div>
  )
}

export default Bubblechart
