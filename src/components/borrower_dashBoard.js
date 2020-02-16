import React, { useState, useEffect } from "react";
import { Panel, Row, Col, Grid, Dropdown, Icon, Button } from "rsuite";
import { Link } from "react-router-dom";
import PlusLogo from "../icon/car.svg";

function kFormatter(num) {
  return Math.abs(num) > 999
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
    : Math.sign(num) * Math.abs(num);
}

// const Card = props => {
//   return (
//     <div style={{ padding: 12 }}>
//       <Panel header={props.asset} shaded style={{ background: "white" }}>
//         <p>{props.asset}</p>
//       </Panel>
//     </div>
//   );
// };

const CustomDropdown = ({ ...props }) => (
  <div style={{ padding: 3 }}>
    <Dropdown
      placement="bottomEnd"
      {...props}
      style={{ background: "white", width: 100, textAlign: "end" }}
    >
      {props.data.map(item => (
        <Dropdown.Item>{item}</Dropdown.Item>
      ))}
    </Dropdown>
  </div>
);

const BorrowerRequestCard = props => {
  console.log(props);
  return (
    <Panel>
      <div
        style={{
          height: 150,
          width: 400,
          background: "white",
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8
        }}
        onClick={props.onSelected}
      >
        <Row>
          <Col md={12} style={{ padding: 15 }}>
            <div>
              <p style={{ fontFamily: "SarabunBold" }}>ดอกเบี้ย</p>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "SarabunBold",
                  fontSize: 30,
                  color: "#F7BE16"
                }}
              >
                {kFormatter(props.interest)}%
              </p>
            </div>

            <div>
              <p style={{ fontFamily: "SarabunBold" }}>ระยะเวลาผ่อนชำระสินเชื่อ</p>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "SarabunBold",
                  fontSize: 30,
                  color: "#F7BE16"
                }}
              >
                {kFormatter(props.paymentRangeMin)} - {kFormatter(props.paymentRangeMax)}เดือน
              </p>
            </div>
          </Col>
          <Col md={12}>
            {/* <div style={{ float: "right", padding: 8 }}>
              <p>ประเภทสินทรัพย์</p>
              <p>{props.testText}</p>
              <Icon icon="logo" size="4x" />
            </div> */}
          </Col>
        </Row>
      </div>
      <div
        style={{
          height: 40,
          width: 400,
          background: props.interested ? "#344381" : "#f5f5f5",
          borderBottomLeftRadius: 8,
          borderBottomRightRadius: 8
        }}
      >
        <Row>
          <Col md={12} style={{ padding: 12 }}>
            <p
              style={{
                color: !props.interested ? "#344381" : "white",
                fontFamily: "SarabunBold",
                textAlign: "end"
              }}
            >
              รายละเอียด
            </p>
          </Col>
          {/* <Col md={12} style={{ padding: 12 }}>
            <p
              style={{
                color: !props.interested ? "#344381" : "white",
                textAlign: "end",
                fontFamily: "SarabunBold"
              }}
            >
              <Link to={`/bid/${props.txId}`}>เสนอดอกเบี้ย</Link>
            </p>
          </Col> */}
        </Row>
      </div>
    </Panel>
  );
};

const InvestorMarketPlace = () => {
  const [borrowerReqsDummies, setBorrowerReqsDummies] = useState([
    {
        interest: 3.5,
        interested: true,
        paymentRangeMin: 12,
        paymentRangeMax: 48,
        txId: 1,
        testText: "nora"
    },
    {
        interest: 4.0,
        interested: true,
        paymentRangeMin: 24,
        paymentRangeMax: 48,
        txId: 2,
    },
    {
        interest: 3.25,
        interested: true,
        paymentRangeMin: 12,
        paymentRangeMax: 36,
        txId: 3,
    }
  ]);

  const [selectedBorrowerReq, setSelectedBorrowerReq] = useState(
    borrowerReqsDummies[0]
  );
  const onBorrowerReqSelected = item => {
    let updatedBorrowerReqs = [...borrowerReqsDummies];
    let targetObj = updatedBorrowerReqs.filter(
      borrowerReq => borrowerReq.txId === item.txId
    )[0];

    targetObj.interested = !targetObj.interested;
    targetObj.testText = "nara";
    setBorrowerReqsDummies(updatedBorrowerReqs);
  };

  return (
    <Grid fluid>
      <Row>
        <Col md={10} lg={6} style={{ padding: 8 }}>
          {/* Grey Container */}
        <Button style={{
            width:300,
            height: 65,
            marginTop: 10,
            marginLeft: 3,
            marginBottom: 5,
            borderRadius: 15,
            backgroundColor: '#344381'
            }}>
                <Row className='show-grid'>
                    <Col xs='8'>
                        <Icon icon='plus' style={{color: 'white', marginLeft: 60, marginTop: 7}}></Icon>
                    </Col>
                    <Col xs={2}>
                        <p style={{color: 'white', fontFamily: "SarabunBold", fontSize: 20}}>ขอสินเชื่อใหม่</p>
                    </Col>
                </Row>  
        </Button>
        <Panel
            shaded
            style={{
              background: "#f0f0f0",
              height: 500,
              borderRadius: 5,
              overflowY: "scroll"
            }}
        >
            <Row style={{ marginTop: 20 }}>
              <Col md={24}>
                <p
                  style={{
                    fontSize: 20,
                    fontFamily: "SarabunBold"
                  }}
                >
                  คำขอของคุณ
                </p>
              </Col>
            </Row>

            <Panel style={{
                height: 170,
                width: 260,
                background: 'white',
                borderRadius: 10,
                marginRight: 50,
                marginTop: 10
            }}>
                <Row className='show-grid'>
                    <Col xs={12}>
                        <div>
                            <p style={{fontFamily: "SarabunBold"}}>วงเงินกู้</p>
                        </div>
                        <div>
                            <p style={{
                                fontFamily: "SarabunBold",
                                fontSize: 30,
                                color: "#DEDEDE"
                            }} >80,000</p>
                        </div>
                        <div>
                            <Icon icon='clock-o' size='3x' style={{color: '#4B5FB0'}}></Icon>
                        </div>
                    </Col>

                    <Col xs={12}>
                        <div>
                            <p style={{fontFamily: "SarabunBold"}}>ประเภทสินทรัพย์</p>
                        </div>
                        <div>
                            <Icon icon='car' size='5x' style={{
                                color: "#DEDEDE", 
                                marginLeft: 20,
                                marginTop: 10,
                                }}></Icon>
                        </div>
                    </Col>
                </Row>
                <div
                    style={{
                    height: 40,
                    width: 230,
                    background: "#f5f5f5",
                    borderBottomLeftRadius: 8,
                    borderBottomRightRadius: 8
                    }}
                >
                    <Row>
                    <Col>
                        <p
                        style={{
                            color: "#344381",
                            textAlign: "end",
                            fontFamily: "SarabunBold"
                        }}
                        >กำลังรอการอนุมัติ ...</p>
                    </Col>
                    </Row>
                </div>         
            </Panel> 

            <Panel style={{
                height: 170,
                width: 260,
                background: 'white',
                borderRadius: 10,
                marginRight: 50,
                marginTop: 10
            }}>
                <Row className='show-grid'>
                    <Col xs={12}>
                        <div>
                            <p style={{fontFamily: "SarabunBold"}}>วงเงินกู้</p>
                        </div>
                        <div>
                            <p style={{
                                fontFamily: "SarabunBold",
                                fontSize: 30,
                                color: "#DEDEDE"
                            }} >120,000</p>
                        </div>
                        <div>
                            <Icon icon='clock-o' size='3x' style={{color: '#4B5FB0'}}></Icon>
                        </div>
                    </Col>

                    <Col xs={12}>
                        <div>
                            <p style={{fontFamily: "SarabunBold"}}>ประเภทสินทรัพย์</p>
                        </div>
                        <div>
                            <Icon icon='car' size='5x' style={{
                                color: "#00C9D7", 
                                marginLeft: 20,
                                marginTop: 10,
                                }}></Icon>
                        </div>
                    </Col>
                </Row>
                <div
                    style={{
                    height: 40,
                    width: 230,
                    background: "#00C9D7",
                    borderBottomLeftRadius: 8,
                    borderBottomRightRadius: 8
                    }}
                >
                    <Row>
                    <Col>
                        <p
                        style={{
                            color: "white",
                            textAlign: "end",
                            fontFamily: "SarabunBold"
                        }}
                        >กำลังรอการอนุมัติ ...</p>
                    </Col>
                    </Row>
                </div>         
            </Panel> 
          </Panel>
        </Col>
        <Col md={14} lg={18} style={{ padding: 8 }}>
          <Panel
            style={{ background: "#DEDEDE", height: 800, overflowY: "scroll" }}
          >
            <Row>
              <Col>
                <p
                  style={{
                    fontSize: 26,
                    alignSelf: "center",
                    fontFamily: "SarabunBold",
                    color: "black"
                  }}
                >
                  การเสนอสินเชื่อให้กับคุณ
                </p>
              </Col>
            </Row>
            <Row>
              {borrowerReqsDummies.map(item => (
               
                  <BorrowerRequestCard
                    interest={item.interest}
                    paymentRangeMin={item.paymentRangeMin}
                    paymentRangeMax={item.paymentRangeMax}
                    interested={item.interested}
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
