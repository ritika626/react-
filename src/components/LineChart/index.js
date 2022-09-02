import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
    scales: {
        x: [{
            grid: {
                display:false
            },
            ticks: {
                major: {
                  enabled: true
                },
                font: function(context) {
                  if (context.tick && context.tick.major) {
                    return {
                      weight: 'bold',
                      color: '#FF0000'
                    };
                  }
                }
              }
        }],
        y: [{
            grid: {
                display:false
            }   
        }]
    }
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [100,25,300,400,5,10,30,78,34],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

const LineChart=()=>{
    return (
       <div>
            <Line options={options} data={data} />
       </div>
    )
}

export default LineChart;
