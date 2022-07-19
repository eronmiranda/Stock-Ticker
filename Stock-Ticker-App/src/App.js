import React, {useState} from 'react'

import {
  MDBNavbar, 
  MDBNavbarBrand, 
  MDBNavbarNav, 
  MDBNavItem,
  } from "mdbreact";

  import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom'

  import StockAppStore from './store/StockAppStore';

import Home from './pages/Home.js';
import Search from './pages/Search.js';
import MyStocksList from './pages/MyStocksList.js';



const App = () => {
  return <StockAppStore>
    <Router>
      <MDBNavbar color="elegant-color" dark expand="md">
          <MDBNavbarBrand>
            <Link to="/" className="white-text">Stocks App</Link>
          </MDBNavbarBrand>
          <MDBNavbarNav right>
            <MDBNavItem>
              <Link to="/search" className="white-text links">Search</Link>
            </MDBNavItem>
            <MDBNavItem>
              <Link to="/my-stocks" className="white-text links">My Stocks</Link>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBNavbar>
        <div className="container">
          <Switch>
            <Route exact path="/my-stocks">
              <MyStocksList/>
            </Route>
            <Route exact path="/search">
              <Search/>
            </Route>
            <Route exact path="/">
              <Home/>
            </Route>
          </Switch>
        </div>
    </Router>
  </StockAppStore>
}

export default App;
