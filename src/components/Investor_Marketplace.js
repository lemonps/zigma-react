import React, { useState, useEffect } from "react";
import {
  Panel,
  Row,
  Col,
  Grid,
  Dropdown,
  Icon,
  Button,
  Divider,
  Form,
  FormControl,
  FormGroup,
  ControlLabel,
  FlexboxGrid
} from "rsuite";
import { abi, address } from "../config";
import Web3 from "web3";

function kFormatter(num) {
  return Math.abs(num) > 999
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
    : Math.sign(num) * Math.abs(num);
}

const CustomDropdown = ({ ...props }) => (
  <div style={{ padding: 3 }}>
    <Dropdown
      placement="bottomEnd"
      {...props}
      style={{ background: "white", width: 100, textAlign: "end" }}
    >
      {props.data.map(item => (
        <Dropdown.Item style={{ color: "#47589e" }}>{item}</Dropdown.Item>
      ))}
    </Dropdown>
  </div>
);

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
      <div
        style={{
          height: 40,
          width: 280,
          background: props.focus ? "#47589e" : "#f5f5f5",
          borderBottomLeftRadius: 8,
          borderBottomRightRadius: 8
        }}
      >
        <Row>
          <Col md={12} style={{ padding: 15 }}>
            <p
              style={{
                color: !props.focus ? "#344381" : "white",
                fontFamily: "SarabunBold"
              }}
            >
              รายละเอียด
            </p>
          </Col>
          <Col md={12} style={{ padding: 15 }}>
            <p
              style={{
                color: !props.focus ? "#344381" : "white",
                textAlign: "end",
                fontFamily: "SarabunBold"
              }}
            >
              {props.focus ? "ถูกเลือก" : "ดูรายละเอียด"}
            </p>
          </Col>
        </Row>
      </div>
    </Panel>
  );
};

const InvestorMarketPlace = () => {
  const [loanAuction, setLoanAuction] = useState("");
  const [count, setCount] = useState(0);
  const [lowestBidRate, setLowestBidRate] = useState(0);
  const [lowestBidder, setLowestBidder] = useState("");
  const [account, setAccount] = useState("");
  const [errMessage, setErrMessage] = useState("");

  const [formValue, setFormValue] = useState({ interest: "" });

  useEffect(() => {
    loadBlockChainData();
  }, []);

  const loadBlockChainData = async () => {
    const web3 = new Web3();
    web3.setProvider(new web3.providers.HttpProvider("http://127.0.0.1:7545"));
    await window.ethereum.enable();

    const account = await web3.eth.getAccounts();
    // this.setState({ account: account[0] });
    setAccount(account[0]);
    console.log("account", account[0]);

    //web3 link to smart contract
    const loanAuction = new web3.eth.Contract(abi, address);
    // this.setState({ loanAuction });
    setLoanAuction(loanAuction);
    console.log("loanAuction", loanAuction);

    const bidCount = await loanAuction.methods.count().call();
    // this.setState({ count: bidCount });
    setCount(bidCount);
    console.log("count: " + bidCount);

    const lowestRate = await loanAuction.methods.lowestBidRate().call();
    // this.setState({ lowestBidRate: lowestRate });
    setLowestBidRate(lowestRate);
    console.log("Current Bit Rate: " + lowestRate);

    // const errMsg = await loanAuction.methods.errMsg().call();
    // this.setState({ errMessage: errMsg });
    // console.log("Current Bit Rate: " + errMsg);
  };

  const bidLoan = (txId, interestRate) => {
    console.log("rate:", interestRate);
    loanAuction.methods
      .bid(txId, interestRate)
      .send({ from: account })
      .then(result => {
        console.log("bid result = ", result);
      });
  };

  const handleSubmit = event => {
    alert("Your favorite flavor is: " + formValue.interest);
    console.log("txId:", selectedBorrowerReq.txId);
    console.log("formValue.interest:", formValue.interest);
    bidLoan(selectedBorrowerReq.txId, formValue.interest);
    event.preventDefault();
  };

  const [borrowerReqsDummies, setBorrowerReqsDummies] = useState([
    {
      asset: "car",
      loan: 125000,
      focus: false,
      numberOfBid: 7,
      txId: 1,
      testText: "nora",
      minInterest: 3.2
    },
    {
      asset: "รถยนต์",
      loan: 31544,
      focus: false,
      numberOfBid: 4,
      txId: 2,
      testText: "nora",
      minInterest: 3.5
    },
    {
      asset: "รถยนต์",
      loan: 17500,
      focus: false,
      numberOfBid: 9,
      txId: 3,
      testText: "nora",
      minInterest: 4
    },
    {
      asset: "บ้าน",
      loan: 125950,
      focus: false,
      numberOfBid: 3,
      txId: 4,
      testText: "nora",
      minInterest: 2.75
    }
  ]);

  const [selectedBorrowerReq, setSelectedBorrowerReq] = useState("");
  const onBorrowerReqSelected = item => {
    let updatedBorrowerReqs = [...borrowerReqsDummies];
    let targetObj = updatedBorrowerReqs.filter(
      borrowerReq => borrowerReq.txId === item.txId
    )[0];

    let oldReq = { ...selectedBorrowerReq };

    targetObj.focus = !targetObj.focus;
    if (item.txId === selectedBorrowerReq.txId) {
      //same
      setSelectedBorrowerReq("");
    } else {
      // another
      oldReq.focus = !oldReq.focus;
      setSelectedBorrowerReq(targetObj);
    }

    setBorrowerReqsDummies(updatedBorrowerReqs);
  };

  return (
    <Grid fluid>
      <Row>
        <Col md={10} lg={6} style={{ padding: 8, height: 420 }}>
          {/* Grey Container */}
          <Panel
            shaded
            style={{
              background: "#f0f0f0",
              height: "100%",
              borderRadius: 5,
              overflowY: "scroll"
            }}
          >
            <Row style={{ marginTop: 20 }}>
              <Col md={24}>
                <p
                  style={{
                    fontSize: 26,
                    alignSelf: "center",
                    textAlign: "center",
                    fontFamily: "SarabunBold"
                  }}
                >
                  ค้นหาสินเชื่อ
                </p>
              </Col>
            </Row>

            {/* First Row of Dropdown input */}
            <Row style={{ marginTop: 20 }}>
              <p>วงเงินกู้ (บาท)</p>
            </Row>
            <Row>
              <Col md={12}>
                <CustomDropdown
                  data={["2500", "3000", "4822"]}
                  title="เริ่มต้น"
                />
              </Col>
              <Col md={12}>
                <CustomDropdown
                  data={["2500", "3000", "4822"]}
                  title="สิ้นสุด"
                />
              </Col>
            </Row>

            {/* Seccond Row of Dropdown input */}
            <Row style={{ marginTop: 20 }}>
              <p>ระยะเวลาผ่อนชำระเงินกู้ (เดือน)</p>
            </Row>
            <Row>
              <Col md={12}>
                <CustomDropdown data={["2500", "3000", "4822"]} title="12" />
              </Col>
              <Col md={12}>
                <CustomDropdown data={["2500", "3000", "4822"]} title="48" />
              </Col>
            </Row>

            {/* Third Row of Dropdown input */}
            <Row style={{ marginTop: 20 }}>
              <p>อายุ (ปี)</p>
            </Row>
            <Row>
              <Col md={12}>
                <CustomDropdown data={["2500", "3000", "4822"]} title="20" />
              </Col>
              <Col md={12}>
                <CustomDropdown data={["2500", "3000", "4822"]} title="50" />
              </Col>
            </Row>

            {/* Third Row of Dropdown input */}
            <Row style={{ marginTop: 20 }}>
              <p>ประเภทรายการ</p>
            </Row>
            <Row>
              <Col md={12}>
                <CustomDropdown
                  data={["2500", "3000", "4822"]}
                  title="ทั้งหมด"
                />
              </Col>
            </Row>
          </Panel>

          <Panel
            shaded
            style={{
              background: selectedBorrowerReq.txId ? "#ffffff" : "#b5b5b5",
              height: 400,
              borderRadius: 5,
              marginTop: 20
            }}
          >
            <Row style={{ marginTop: 20, marginBottom: 20 }}>
              <Col md={24}>
                <p
                  style={{
                    fontSize: 26,
                    alignSelf: "center",
                    textAlign: "center",
                    fontFamily: "SarabunBold",
                    color: selectedBorrowerReq.txId ? "#5d77de" : "#e6e6e6"
                  }}
                >
                  รายละเอียดการขอสินเชื่อ
                </p>
                {selectedBorrowerReq.txId ? null : (
                  <p
                    style={{
                      fontSize: 26,
                      alignSelf: "center",
                      textAlign: "center",
                      fontFamily: "SarabunBold",
                      color: selectedBorrowerReq.txId ? "#5d77de" : "#e6e6e6"
                    }}
                  >
                    (ยังไม่มีรายการที่คุณเลือก)
                  </p>
                )}
              </Col>
            </Row>
            {selectedBorrowerReq.txId ? (
              <Row>
                <Col md={12} lg={12}>
                  <p
                    style={{
                      fontSize: 16,
                      textAlign: "center",
                      fontFamily: "SarabunBold"
                    }}
                  >
                    ดอกเบี้ยต่ำสุด ณ ขณะนี้
                  </p>
                  <p
                    style={{
                      fontSize: 40,
                      textAlign: "center",
                      fontFamily: "SarabunBold"
                    }}
                  >
                    {selectedBorrowerReq.minInterest
                      ? selectedBorrowerReq.minInterest
                      : "3.5%"}
                  </p>
                </Col>
                <Col md={12} lg={12}>
                  <p
                    style={{
                      fontSize: 16,
                      textAlign: "center",
                      fontFamily: "SarabunBold"
                    }}
                  >
                    จำนวนการ Bid ดอกเบี้ย
                  </p>
                  <p
                    style={{
                      fontSize: 40,
                      textAlign: "center",
                      fontFamily: "SarabunBold"
                    }}
                  >
                    {selectedBorrowerReq.numberOfBid
                      ? `${selectedBorrowerReq.numberOfBid} ครั้ง`
                      : "13 ครั้ง"}
                  </p>
                </Col>
              </Row>
            ) : null}
            {selectedBorrowerReq.txId ? (
              <Form
                style={{ margin: "auto" }}
                onChange={formValue => setFormValue(formValue)}
                formValue={formValue}
              >
                <Divider>การเสนอดอกเบี้ยให้กับผู้ขอกู้</Divider>
                <FlexboxGrid justify="center">
                  <FormGroup>
                    <ControlLabel>แบบฟอร์มเสนอดอกเบี้ย</ControlLabel>
                    <FormControl
                      name="interest"
                      placeholder="3.0"
                      style={{
                        textAlign: "center",
                        fontSize: 20,
                        color: "#47589e"
                      }}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Button
                      style={{ background: "#0bd6b4", color: "white" }}
                      onClick={handleSubmit}
                    >
                      เสนอดอกเบี้ย
                    </Button>
                  </FormGroup>
                </FlexboxGrid>
              </Form>
            ) : null}
          </Panel>
        </Col>
        <Col md={14} lg={18} style={{ padding: 8, height: 840 }}>
          <Panel
            style={{
              background: "#ededed",
              overflowY: "scroll",
              height: "100%"
            }}
          >
            <Row>
              <Col>
                <p
                  style={{
                    fontSize: 26,
                    alignSelf: "center",
                    fontFamily: "SarabunBold"
                  }}
                >
                  ผลลัพธ์การค้นหา
                </p>
              </Col>
            </Row>
            <div>
              <Divider />
            </div>
            <Row>
              {borrowerReqsDummies.map(item => (
                <BorrowerRequestCard
                  asset={item.asset}
                  loan={item.loan}
                  focus={selectedBorrowerReq.txId === item.txId ? true : false}
                  onSelected={() => onBorrowerReqSelected(item)}
                  tx={item}
                />
              ))}
            </Row>
          </Panel>
        </Col>
      </Row>
    </Grid>
  );
};

export default InvestorMarketPlace;
