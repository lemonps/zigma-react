import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import BorrowerDetail from "./components/borrowerDetail";
import InvestorMarketPlace from "./components/Investor_Marketplace";
import "rsuite/dist/styles/rsuite-default.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <AppNavbar />
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <Route path="/borrowerdetail" component={BorrowerDetail} />
        {/* <Route path="/investormarketplace" component={InvestorMarketPlace} /> */}
      </BrowserRouter>
    );
  }
}

export default App;
