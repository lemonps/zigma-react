import React, { Component } from "react";
import { abi, address } from "../config";
import Web3 from "web3";

class Bid extends Component {

  componentWillMount() {
    this.loadBlockChainData();
  }

  async loadBlockChainData() {
    const web3 = new Web3(Web3.givenProvider);
    await window.ethereum.enable();

    const account = await web3.eth.getAccounts();
    this.setState({ account: account[0] });
    console.log("account", account[0]);

    //web3 link to smart contract
    const loanAuction = new web3.eth.Contract(abi, address);
    this.setState({ loanAuction });
    console.log("loanAuction", loanAuction);

    const count = await loanAuction.methods.count().call();
    this.setState({ count });
    console.log("count: " + count);

    const lowestBidRate = await loanAuction.methods.lowestBidRate().call();
    this.setState({ lowestBidRate });
    console.log("Current Bit Rate: " + lowestBidRate);
  }

  constructor(props) {
    super(props);
    this.state = { txId: "", Interest: "", loanAuction: "", count: 0, auctionTime: "259200", lowestBidRate: 0, account: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.bidLoan = this.bidLoan.bind(this);
  }

  handleChange(event) {
    this.setState({ Interest: event.target.value });
  }

  handleSubmit(event) {
    alert("Your favorite flavor is: " + this.state.Interest);
    this.bidLoan(this.state.Interest);
    event.preventDefault();
  }

  bidLoan(interestRate) {
    console.log("rate:", interestRate);
    this.state.loanAuction.methods
      .bid(interestRate)
      .send({ from: this.state.account });
  }

  render() {
    return (
      <div>
        <p><span>จำนวนครั้งในการ Bid </span>  {this.state.count}</p>
        <p><span>Rate ปัจจุบัน</span>  {this.state.lowestBidRate}</p>

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
      </div>
    )
  };
}

export default Bid;
