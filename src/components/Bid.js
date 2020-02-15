import React, { Component } from "react";
import { abi, address } from "../config";
import Web3 from "web3";
import { Panel, Row, Col, Grid, Dropdown, Icon } from "rsuite";

class Bid extends Component {
  constructor(props) {
    super(props);
    this.state = { txId: "", Interest: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ Interest: event.target.value });
  }

  handleSubmit(event) {
    alert("Your favorite flavor is: " + this.state.Interest);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Interest:
          <input
            type="text"
            value={this.state.Interest}
            onChange={inputObj =>
              this.handleChange(inputObj)
            }
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Bid;
