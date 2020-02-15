import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import BorrowerDetail from "./components/borrowerDetail";
import InvestorMarketPlace from "./components/Investor_Marketplace";
import "rsuite/dist/styles/rsuite-default.css";
import Bid from "./components/Bid";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <AppNavbar />
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <Route path="/borrowerdetail" component={BorrowerDetail} />
        {/* <Route path="/investormarketplace" component={InvestorMarketPlace} /> */}
        <Route path="/investormarketplace" component={InvestorMarketPlace} />
        <Route path="/bid/:txId" component={Bid} />
      </BrowserRouter>
    );
  }
}

export default App;
