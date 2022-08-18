import {useContext} from 'react';
import {StockAppContext} from '../store/StockAppStore.js';

const StockPriceDisplay = (props) => {
  const store = useContext(StockAppContext);
  const [stockData, setStockData] = store.currentStock;
  const [showHistory, setShowHistory] = store.showHistory;
  const [myStocks, setMyStocks] = store.myStocks;

  const hasStockData = () => {
    if (stockData && 'symbol' in stockData){
      return true
    }
    return false
  }

  const saveStock = () => {
    let allStocks = {...myStocks}
    allStocks[stockData.symbol] = stockData;
    setMyStocks(allStocks)
  }


  return(<div className="col">
          {
            hasStockData()?
            <section className="stock-display">
              <h1>Stock Viewer</h1>
              <div className="details">symbol: {stockData.symbol}, {stockData.date}</div>
              <div className="details">price: {stockData.price}</div>
              <button
                id="view-history-button"
                className="btn btn-success"
                onClick={()=> setShowHistory(true)}>View History</button>
              <button
                id="view-history-button"
                className="btn btn-primary"
                onClick={saveStock}>Save To My Stocks</button>
            </section>
            :
            <section className="stock-display">
            No Stock Data
            </section>
          }

        </div>);

}

export default StockPriceDisplay;
