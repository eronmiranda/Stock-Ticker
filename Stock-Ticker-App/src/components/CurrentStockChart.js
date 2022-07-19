import React, {useState, useContext, useEffect} from 'react'
import { Bar } from "react-chartjs-2";
import {StockAppContext} from '../store/StockAppStore.js';

const CurrentStockChart = (props) => {
  const [myChartData, setMyChartData] = useState({});
  const store = useContext(StockAppContext);
  const [stockData, setStockData] = store.currentStock;
  const [showHistory, setShowHistory] = store.showHistory;
  useEffect(()=> {
    if (!showHistory) {
      return
    }
    setMyChartData({  // eslint-disable-line 
      type: 'bar',
      data: {
        labels: ['open', 'high', 'low', 'price', 'previous close'],
        datasets: [{
          data: [stockData.open, stockData.high, stockData.low, stockData.price, stockData.prevClose],
          label: `${stockData.symbol} in USD`,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
          ],
          borderWidth: 1,
        },
        ],
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false,
            },
          },
          ],
        },
      },
    })
  }, [stockData, showHistory])
  // destroy the chart so underlying data isn't shown.


  return <React.Fragment>
    {showHistory &&
      <div class="col">
        <h1>Current Stock Price</h1>
        <Bar data={myChartData.data} options={{ responsive: true }} />
      </div>
    }
  </React.Fragment>
}

export default CurrentStockChart;