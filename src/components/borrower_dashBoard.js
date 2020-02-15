import React, { useState, useEffect } from "react";
import { Panel, Row, Col, Grid, Dropdown, Icon } from "rsuite";
import { Link } from "react-router-dom";

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
      style={{ background: "white", width: 200, textAlign: "end" }}
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
          height: 120,
          width: 200,
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
                  fontSize: 50,
                  color: "#F7BE16"
                }}
              >
                {kFormatter(props.loan)}
              </p>
            </div>
          </Col>
          <Col md={12}>
            <div style={{ float: "right", padding: 5 }}>
              <p>ประเภทสินทรัพย์</p>
              <p>{props.testText}</p>
              <Icon icon="car" size="5x" />
            </div>
          </Col>
        </Row>
      </div>
      <div
        style={{
          height: 40,
          background: props.interested ? "#344381" : "#f5f5f5",
          borderBottomLeftRadius: 8,
          borderBottomRightRadius: 8
        }}
      >
        <Row>
          <Col md={12} style={{ padding: 15 }}>
            <p
              style={{
                color: !props.interested ? "#344381" : "white",
                fontFamily: "SarabunBold"
              }}
            >
              รายละเอียด
            </p>
          </Col>
          <Col md={12} style={{ padding: 15 }}>
            <p
              style={{
                color: !props.interested ? "#344381" : "white",
                textAlign: "end",
                fontFamily: "SarabunBold"
              }}
            >
              <Link to={`/bid/${props.txId}`}>เสนอดอกเบี้ย</Link>
            </p>
          </Col>
        </Row>
      </div>
    </Panel>
  );
};

const InvestorMarketPlace = () => {
  const [borrowerReqsDummies, setBorrowerReqsDummies] = useState([
    {
      asset: "บ้าน",
      loan: 125000,
      interested: false,
      numberOfBid: 7,
      txId: 1,
      testText: "nora"
    },
    {
      asset: "รถยนต์",
      loan: 31544,
      interested: false,
      numberOfBid: 4,
      txId: 2,
      testText: "nora"
    },
    {
      asset: "รถยนต์",
      loan: 17500,
      interested: false,
      numberOfBid: 9,
      txId: 3,
      testText: "nora"
    },
    {
      asset: "บ้าน",
      loan: 125950,
      interested: false,
      numberOfBid: 3,
      txId: 4,
      testText: "nora"
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
        </Col>
        <Col md={14} lg={18} style={{ padding: 8 }}>
          <Panel
            style={{ background: "#344381", height: 800, overflowY: "scroll" }}
          >
            <Row>
              <Col>
                <p
                  style={{
                    fontSize: 26,
                    alignSelf: "center",
                    fontFamily: "SarabunBold",
                    color: "white"
                  }}
                >
                  ผลลัพธ์การค้นหา
                </p>
              </Col>
            </Row>
            <Row>
              {borrowerReqsDummies.map(item => (
                <Col md={12} lg={6}>
                  <BorrowerRequestCard
                    asset={item.asset}
                    loan={item.loan}
                    interested={item.interested}
                    onSelected={() => onBorrowerReqSelected(item)}
                    tx={item}
                  />
                </Col>
              ))}
            </Row>
          </Panel>
        </Col>
      </Row>
    </Grid>
  );
};

export default InvestorMarketPlace;
