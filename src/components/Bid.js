import React, { Component } from "react";
import { Panel, Row, Col, Grid, Dropdown, Icon } from "rsuite";

class Bid extends Component {
  constructor(props) {
    super(props);
    this.state = { txId: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ txId: event.target.value });
  }

  handleSubmit(event) {
    alert("Your favorite flavor is: " + this.state.txId);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.txId} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Bid;
