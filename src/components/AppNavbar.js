import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav, Dropdown, Icon } from "rsuite";
import ZIGMA from "../images/zigma_logo_new white.png";

const AppNavbar = () => {
  return (
    <Navbar style={{ background: "#344381"}}>
      <Navbar.Header>
        <Nav>
          <NavLink to="/home" className="navbar-brand logo">
            {/* <p style={{ padding: 10, color: "white" }}>ZIGMA</p> */}
            <img src={ZIGMA} alt="logo" width={50} />
          </NavLink>
        </Nav>
      </Navbar.Header>
      <Navbar.Body>
        <Nav>
          <Nav.Item>
            <NavLink to="/investormarketplace">Market Place</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/borrower_dashBoard">Borrower DashBoard</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/bid/555">Borrower DashBoard</NavLink>
          </Nav.Item>
        </Nav>
        <Nav pullRight>
          <Nav.Item>
            <NavLink to="/signup">Signup</NavLink>
          </Nav.Item>
          <Nav.Item>
            {/* Signin */}
            <NavLink to="/signin">Signin</NavLink>
          </Nav.Item>
          <Nav.Item icon={<Icon icon="cog" />}>Settings</Nav.Item>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
};

export default AppNavbar;
