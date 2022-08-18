import React, {useContext}from 'react'
import {StockAppContext} from '../store/StockAppStore.js';

const StockHistoryList = (props) => {
  const store = useContext(StockAppContext);
  const [stockData, setStockData] = store.currentStock;
  const [showHistory, setShowHistory] = store.showHistory;
  return (<div className="col">
            {showHistory ?
              <React.Fragment>
                <h1>Stock History</h1>
                <table className="table">
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
                    {stockData.history.map((day,key)=> {
                      return (<tr key={key}>
                                <td>${day.date}</td>
                                <td>${day.open}</td>
                                <td>${day.high}</td>
                                <td>${day.low}</td>
                                <td>${day.close}</td>
                              </tr>);
                    })}
                  </tbody>
                </table>

              </React.Fragment>
              :
              <p> No history to display </p>
            }
          </div>);
}

export default StockHistoryList;
