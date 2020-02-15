import React, { Component } from "react";
import { abi, address } from "../config";
import Web3 from "web3";

function kFormatter(num) {
  return Math.abs(num) > 999
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
    : Math.sign(num) * Math.abs(num);
}

const BorrowerRequestCard = props => {
  return (
    <Panel>
      <div
        style={{
          height: 120,
          width: 280,
          background: "white",
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8
        }}
        onClick={props.onSelected}
      >
        <Row>
          <Col md={12} style={{ padding: 15 }}>
            <div>
              <p style={{ fontFamily: "SarabunBold" }}>วงเงินกู้</p>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "SarabunBold",
                  textAlign: "center",
                  fontSize: 36,
                  color: "#F7BE16"
                }}
              >
                {kFormatter(props.loan)}
              </p>
            </div>
          </Col>
          <Col md={12}>
            <div style={{ float: "right", padding: 5, alignItems: "center" }}>
              <p>ประเภทสินทรัพย์</p>
              <p>{props.testText}</p>
              <div style={{ float: "right" }}>
                <Icon icon="car" size="3x" />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Panel>
  );
};

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
      <Grid fluid>
        <Row>
          <Col md={10} lg={6} style={{ padding: 8 }}>
            {/* Grey Container */}
            <Panel
              shaded
              style={{
                background: "#f0f0f0",
                height: 500,
                borderRadius: 5,
                overflowY: "scroll"
              }}
            >
              <BorrowerRequestCard />
            </Panel>
          </Col>
          <Col md={14} lg={18} style={{ padding: 8 }}>
            <Panel
              style={{
                background: "#ededed",
                height: 800,
                overflowY: "scroll"
              }}
            >
              <form onSubmit={this.handleSubmit}>
                <label>
                  Interest:
                  <input
                    type="text"
                    value={this.state.Interest}
                    onChange={inputObj => this.handleChange(inputObj)}
                  />
                </label>
                <input type="submit" value="Submit" />
              </form>
            </Panel>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Bid;
