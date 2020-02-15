import React from "react";
import { Panel, Row, Col, Grid, Dropdown } from "rsuite";

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
  <div style={{ padding: 3, marginTop: 20 }}>
    {props.label ? (
      <p style={{ fontFamily: "Sarabun" }}>{props.label}</p>
    ) : null}

    <Dropdown {...props}>
      {props.data.map(item => (
        <Dropdown.Item>{item}</Dropdown.Item>
      ))}
    </Dropdown>
  </div>
);

const InvestorMarketPlace = () => {
  return (
    <Grid fluid>
      <Row>
        <Col md={10} lg={6}>
          <div style={{ padding: 8 }}>
            {/* Grey Container */}
            <Panel
              shaded
              style={{ background: "#f0f0f0", height: 1000, borderRadius: 5 }}
            >
              {/* Content Container */}
              <div style={{ padding: 12 }}>
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

                <CustomDropdown
                  label="วงเงินกู้"
                  data={["2500", "3000", "4822"]}
                  title="เริ่มต้น"
                />
              </div>
            </Panel>
          </div>
        </Col>
      </Row>
    </Grid>
  );
};

export default InvestorMarketPlace;
