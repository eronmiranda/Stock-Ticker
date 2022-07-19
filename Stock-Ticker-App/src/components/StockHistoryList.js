import React, {useContext}from 'react'
import {StockAppContext} from '../store/StockAppStore.js';

const StockHistoryList = (props) => {
  const store = useContext(StockAppContext);
  const [stockData, setStockData] = store.currentStock;
  const [showHistory, setShowHistory] = store.showHistory;
  return <div class="col">
    {showHistory ?
      <React.Fragment>
      <h1>Stock History</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">date</th>
            <th scope="col">open</th>
            <th scope="col">high</th>
            <th scope="col">low</th>
            <th scope="col">close</th>
          </tr>
        </thead>
        <tbody>
          {stockData.history.map((day)=> {
            return <tr>
              <td scope="col">${day.date}</td>
              <td scope="col">${day.open}</td>
              <td scope="col">${day.high}</td>
              <td scope="col">${day.low}</td>
              <td scope="col">${day.close}</td>
            </tr>
          })}
        </tbody>
      </table>

      </React.Fragment>
      :
      <p> No history to display </p>
    }
  </div>
}

export default StockHistoryList;
