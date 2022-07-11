import React, { useEffect, useState } from 'react'
import {Bar} from 'react-chartjs-2'
import {CategoryScale} from 'chart.js'; 
import Chart from 'chart.js/auto';

function BarChart() {
  const [url, setUrl] = useState('http://localhost:3000/items')
  const [data, setData] = useState([])
  Chart.register(CategoryScale);

  useEffect(()=>{
    const fetchData = async (url) => {
      const response = await fetch(url);
      const resData = await response.json()
      setData(resData)
    }
    fetchData(url)
  },[url])

  useEffect(()=>{
    setData(data)
  }, [data])


  let days = []
  let amount = []

  data.map(each=>{
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