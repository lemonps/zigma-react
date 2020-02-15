import React, { Component } from "react";
import { Grid, Row, Col, Panel, PanelGroup, Header, Content, Footer, Container, Icon} from 'rsuite';
import CarLogo from '../images/car.png'
import Image from 'react-bootstrap/Image'

const BorrowerDetail = () => {
  return(
    <Grid fluid>
      <Row className="show-grid">
        {/* <Col xs={12}>
          <Image src={CarLogo} style={{width: 100, height: 100, marginTop: 100}}></Image>
        </Col> */}
        <Row style={{ marginLeft: 250, marginTop: 100, width: 800, height: 400, background: "#f0f0f0"}}>  

          <Col style={{background: '#DADADA'}}>
            TX HASH: 0x31c2d79f11efae65d8c42d552515d2bcf25f928bece812b2c759612e92bf8595
          </Col>
          
          <Row style={{marginLeft: 400, marginTop: 40}}>
            <Col xs={4} >
              วงเงินกู้
            </Col>
            <Col xs={4} style={{
              fontFamily: "SarabunBold",
              color: "#F7BE16",
              fontSize: 20
            }}>80,000</Col>
          </Row>

          <Row style={{marginLeft: 400, marginTop: 10}}>
            <Col xs={10} >
              ระยะเวลาผ่อนชำระเงินกู้
            </Col>
            <Col xs={10} style={{
              fontFamily: "SarabunBold",
              color: "#F7BE16",
              fontSize: 20
            }}>12 เดือน</Col>
          </Row>

          <Col xs={12} style={{marginLeft: 400, marginTop: 10}}>อาชีพ รับราชการครู</Col>
          <Col xs={12} style={{marginLeft: 400, marginTop: 10}}>อายุ 36 ปี</Col>
          <Col xs={12} style={{marginLeft: 400, marginTop: 10, width: 350, height: 150, background: "#DADADA"}}>
            รายละเอียดหลักค้ำประกัน
          </Col>
        </Row>
      </Row>
    </Grid>
  );
};

export default BorrowerDetail;
