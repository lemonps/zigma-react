import React, { Component } from "react";
import { Grid, Row, Col, Panel, PanelGroup, Header, Content, Footer, Container } from 'rsuite';

const BorrowerDetail = () => {
  return(
    <Grid fluid>
      <Row className="show-grid">
        <Col style={{ marginLeft: 250, marginTop: 100, width: 800, height: 400, background: "#f0f0f0"}}>
          <Col style={{background: '#DADADA'}}>
            TX HASH: 0x31c2d79f11efae65d8c42d552515d2bcf25f928bece812b2c759612e92bf8595
          </Col>
          <Col style={{marginLeft: 400, marginTop: 50}}>วงเงินกู้ 80,000</Col>
          <Col style={{marginLeft: 400, marginTop: 10}}>ระยะเวลาผ่อนชำระเงินกู้ 12 เดือน</Col>
          <Col style={{marginLeft: 400, marginTop: 10}}>อาชีพ รับราชการครู</Col>
          <Col style={{marginLeft: 400, marginTop: 10}}>อายุ 36 ปี</Col>
          <Col style={{marginLeft: 400, marginTop: 10, width: 350, height: 150, background: "#DADADA"}}>
            รายละเอียดหลักค้ำประกัน
          </Col>
        </Col>
      </Row>
    </Grid>
  );
};

export default BorrowerDetail;
