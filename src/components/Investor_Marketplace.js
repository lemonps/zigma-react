import React from "react";
import { Panel, Row, Col, Grid, Dropdown, Icon } from "rsuite";

const Card = props => {
  return (
    <div style={{ padding: 12 }}>
      <Panel header={props.asset} shaded style={{ background: "white" }}>
        <p>{props.asset}</p>
      </Panel>
    </div>
  );
};

const CustomDropdown = ({ ...props }) => (
  <div style={{ padding: 3 }}>
    <Dropdown
      {...props}
      style={{ background: "white", width: 200, textAlign: "end" }}
    >
      {props.data.map(item => (
        <Dropdown.Item>{item}</Dropdown.Item>
      ))}
    </Dropdown>
  </div>
);

const BorrowerRequestCard = props => (
  <Panel>
    <div
      style={{
        height: 120,
        background: "white",
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
      }}
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
              {props.loan}
            </p>
          </div>
        </Col>
        {/* <Col md={12}>
          <p>ประเภทสินทรัพย์</p>
          <Icon
            style={{ textAlign: "center", background: "red" }}
            icon="car"
            size="5x"
          />
        </Col> */}
      </Row>
    </div>
    <div
      style={{
        height: 40,
        background: props.interested ? "#344381" : "#F0F0F0",
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8
      }}
    >
      <Row>
        <Col md={12} style={{ padding: 15 }}>
          <p style={{ color: !props.interested ? "#344381" : "white" }}>
            รายละเอียด
          </p>
        </Col>
        <Col md={12} style={{ padding: 15 }}>
          <p
            style={{
              color: !props.interested ? "#344381" : "white",
              textAlign: "end"
            }}
          >
            {props.interested ? "ไม่สนใจ" : "น่าสนใจ"}
          </p>
        </Col>
      </Row>
    </div>
  </Panel>
);

const InvestorMarketPlace = () => {
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
            <Row style={{ marginBottom: 20 }}>
              <Col md={24}>
                <p
                  style={{
                    fontSize: 26,
                    alignSelf: "center",
                    textAlign: "center",
                    fontFamily: "SarabunBold"
                  }}
                >
                  ค้นหาสินเชื่อตาม
                </p>
              </Col>
            </Row>

            {/* First Row of Dropdown input */}
            <Row style={{ marginBottom: 20 }}>
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
            <Row style={{ marginBottom: 20 }}>
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
            <Row style={{ marginBottom: 20 }}>
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
            <Row style={{ marginBottom: 20 }}>
              <p>อายุ (ปี)</p>
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
            style={{ background: "#d1d1d1", height: 800, overflowY: "scroll" }}
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
            <Row>
              <Col md={6}>
                <BorrowerRequestCard
                  asset={"รถยนต์"}
                  loan={"85K"}
                  interested={true}
                />
              </Col>
              <Col md={6}>
                <BorrowerRequestCard
                  asset={"รถยนต์"}
                  loan={"85K"}
                  interested={true}
                />
              </Col>
              <Col md={6}>
                <BorrowerRequestCard
                  asset={"รถยนต์"}
                  loan={"85K"}
                  interested={false}
                />
              </Col>
              <Col md={6}>
                <BorrowerRequestCard
                  asset={"รถยนต์"}
                  loan={"85K"}
                  interested={false}
                />
              </Col>
            </Row>
          </Panel>
        </Col>
      </Row>
    </Grid>
  );
};

export default InvestorMarketPlace;
