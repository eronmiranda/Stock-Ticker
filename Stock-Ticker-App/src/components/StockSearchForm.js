import React, { useState, useContext} from 'react'
import {Stock} from '../api/stock.js'
import { MDBInput } from "mdbreact";
import {StockAppContext} from '../store/StockAppStore.js';
const StockSearchForm = (props) => {
  const [stockSymbol, setStockSymbol] = useState("");
  const store = useContext(StockAppContext);
  const [stockData, setStockData] = store.currentStock;

  const handleStockForm = (event) => {
    event.preventDefault();
    console.log(stockSymbol);
    let stock = new Stock({symbol: stockSymbol});
    stock.getStockPrice()
      .then((prices)=> {
        return stock.getStockFiveDayHistory()
      }).then((priceAndHistoryData) => {
        setStockData(priceAndHistoryData);
        //props.setStockData(priceAndHistoryData)
      })
  }


  return <div class="col">
    <h1>Stock Search</h1>
    <form
      class="frm symbol"
      onSubmit={handleStockForm}>
      <div class="md-form">
        <MDBInput label="Ticker Symbol"
          value={stockSymbol}
          onChange={(event)=> setStockSymbol(event.target.value)}/>
      </div>
      <button type="submit" class="btn btn-success">View</button>
    </form>
  </div>
}

export default StockSearchForm;