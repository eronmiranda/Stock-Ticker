import React, {useState} from 'react'

import {
  MDBNavbar, 
  MDBNavbarBrand, 
  MDBNavbarNav, 
  MDBNavItem,
  MDBContainer,
  MDBNavbarToggler,
  MDBIcon,
  MDBCollapse
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
  const [showNavSecond, setShowNavSecond] = useState(false);
  console.log(showNavSecond);
  return  (<StockAppStore>
            <Router>
              <MDBNavbar color="elegant-color" dark expand="md" fixed="top">
                <MDBContainer size="md">
                  <MDBNavbarBrand>
                      <Link to="/" className="white-text">Stock Ticker App</Link>
                  </MDBNavbarBrand>
                  <MDBNavbarToggler
                    type='button'
                    data-target='#navbarTogglerDemo03'
                    aria-controls='navbarTogglerDemo03'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowNavSecond(!showNavSecond)}
                  >
                    <MDBIcon icon='bars' fas />
                  </MDBNavbarToggler>

                  <MDBCollapse navbar show={showNavSecond ? 1 : 0}>
                    <MDBNavbarNav right>
                      <MDBNavItem>
                        <Link to="/search" className="white-text links">Search</Link>
                      </MDBNavItem>
                      <MDBNavItem>
                        <Link to="/my-stocks" className="white-text links">My Stocks</Link>
                      </MDBNavItem>
                    </MDBNavbarNav>
                  </MDBCollapse>
                </MDBContainer>

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
          </StockAppStore>);
}

export default App;
