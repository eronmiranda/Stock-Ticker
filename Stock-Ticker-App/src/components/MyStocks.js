import React, {useContext} from 'react'
import { MDBListGroup, MDBListGroupItem } from "mdbreact";
import {StockAppContext} from '../store/StockAppStore.js';


const MyStocks = (props) => {
  const store = useContext(StockAppContext);
  const [myStocks, setMyStocks] = store.myStocks;
    return(<div className="col">
            <MDBListGroup>
              {Object.keys(myStocks).map((symbol, index)=>{
                return (<MDBListGroupItem key={index}>
                          {symbol}
                          <div className="row">
                            <div className="col">
                            open: ${myStocks[symbol].open}
                            </div>
                            <div className="col">
                            high: ${myStocks[symbol].high}
                            </div>
                            <div className="col">
                            low: ${myStocks[symbol].low}
                            </div>
                            <div className="col">
                            price: ${myStocks[symbol].price}
                            </div>
                            <div className="col">
                            prevClose: ${myStocks[symbol].prevClose}
                            </div>
                          </div>
                        </MDBListGroupItem>)
                })
              }
            </MDBListGroup>
          </div>);
}

export default MyStocks
