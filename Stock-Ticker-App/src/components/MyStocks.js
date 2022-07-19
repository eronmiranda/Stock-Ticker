import React, {useContext} from 'react'
import { MDBListGroup, MDBListGroupItem } from "mdbreact";
import {StockAppContext} from '../store/StockAppStore.js';


const MyStocks = (props) => {
  const store = useContext(StockAppContext);
  const [myStocks, setMyStocks] = store.myStocks;
    return <div className="col">
        <h1>My Stocks</h1>
        <MDBListGroup>
          {Object.keys(myStocks).map((symbol, index)=>{
            return <MDBListGroupItem key={index}>
              {symbol}
              <div class="row">
                <div class="col">
                open: ${myStocks[symbol].open}
                </div>
                <div class="col">
                high: ${myStocks[symbol].high}
                </div>
                <div class="col">
                low: ${myStocks[symbol].low}
                </div>
                <div class="col">
                price: ${myStocks[symbol].price}
                </div>
                <div class="col">
                prevClose: ${myStocks[symbol].prevClose}
                </div>
              </div>
            </MDBListGroupItem>
          })}
        </MDBListGroup>
    </div>
}

export default MyStocks
