import {createContext, useState} from 'react';

const StockAppContext = createContext();

const StockAppStore = (props) => {
  const[stockData,setStockData] = useState({});
  const [showHistory, setShowHistory] = useState(false);
  const [myStocks, setMyStocks] = useState({});

  const store = {
    "default-value": "default store value",
    "currentStock": [stockData,setStockData],
    "showHistory": [showHistory,setShowHistory],
    "myStocks": [myStocks, setMyStocks],
  }
  return <StockAppContext.Provider value={store}>
    {props.children}
  </StockAppContext.Provider>
}

export default StockAppStore;
export {StockAppContext}