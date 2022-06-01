import React, { useEffect, useState } from 'react'
import {Bar, Line, Pie} from 'react-chartjs-2'
import {CategoryScale} from 'chart.js'; 
import Chart from 'chart.js/auto';
import Data from '../data.json'

function BarChart() {
  Chart.register(CategoryScale);

  let days = []
  let amount = []

  Data.map(each=>{
    days.push(each.day)
    amount.push(each.amount)
  })

  const chartData = {
    labels: days,
    datasets:[{
      label: 'Expenses',
      data: amount,
      backgroundColor: [
        'hsl(10, 79%, 65%)',
        'hsl(10, 79%, 65%)',
        'hsl(186, 34%, 60%)',
        '#FF9B87',
        'hsl(10, 79%, 65%)',
        'hsl(10, 79%, 65%)',
        'hsl(10, 79%, 65%)'
      ],
      borderRadius: 3,
      hoverBackgroundColor: 'hsl(25, 47%, 15%)',
      hoverCursor: 'pointer',
    }
  ]
  }

  const chartOptions = {
    scales: {
      yAxis: {
        grid: {
          display: false,
          drawOnChartArea: false
        },
        ticks:{
          display: false
        }
      },
      xAxis: {
        grid: {
          display: false,
          drawOnChartArea: false
        }
      }
    },
    
}


  return (
    <div className='chart'>
      <Bar 
        data={chartData}
        options={chartOptions}
      />
    </div>
  )
}

export default BarChart