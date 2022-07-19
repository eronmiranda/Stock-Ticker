import {useContext} from 'react';
import {StockAppContext} from '../store/StockAppStore.js';

const StockPriceDisplay = (props) => {
  const store = useContext(StockAppContext);
  const [stockData, setStockData] = store.currentStock;
  const [showHistory, setShowHistory] = store.showHistory;
  const [myStocks, setMyStocks] = store.myStocks;

  const hasStockData = () => {
    if (!stockData) {
      return false
    }
    if ('symbol' in stockData){
      return true
    }
    return false
  }

  const saveStock = () => {
    let allStocks = {...myStocks}
    allStocks[stockData.symbol] = stockData;
    console.log(allStocks)
    setMyStocks(allStocks)
  }


  return <div class="col">
    {
      hasStockData()?
      <section class="stock-display">
        <h1>Stock Viewer</h1>
        <div class="details">symbol: {stockData.symbol}, {stockData.date}</div>
        <div class="details">price: {stockData.price}</div>
        <button
          id="view-history-button"
          class="btn btn-success"
          onClick={()=> setShowHistory(true)}>View History</button>
        <button
          id="view-history-button"
          class="btn btn-primary"
          onClick={saveStock}>Save To My Stocks</button>
      </section>
      :
      <section class="stock-display">
       No Stock Data
      </section>
    }

  </div>

}

export default StockPriceDisplay;
