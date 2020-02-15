import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav, Dropdown, Icon } from "rsuite";

const AppNavbar = () => {
  return (
    <Navbar>
      <Navbar.Header>
        {/* <a href="/home" className="navbar-brand logo">
          ZIGMA
        </a> */}
        <NavLink to="/home">ZIGMA</NavLink>
      </Navbar.Header>
      <Navbar.Body>
        <Nav>
          <Nav.Item icon={<Icon icon="home" />}>Home</Nav.Item>
          <Nav.Item>News</Nav.Item>
          <Nav.Item>Products</Nav.Item>
          <Dropdown title="About">
            <Dropdown.Item>Company</Dropdown.Item>
            <Dropdown.Item>Team</Dropdown.Item>
            <Dropdown.Item>Contact</Dropdown.Item>
          </Dropdown>
        </Nav>
        <Nav pullRight>
          <Nav.Item>
            {/* <a href="/signup" className="navbar">
              Signup
            </a> */}
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
