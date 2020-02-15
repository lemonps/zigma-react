import React from "react";
import { Navbar, Nav, Dropdown, Icon } from "rsuite";

const AppNavbar = () => {
  return (
    <Navbar>
      <Navbar.Header>
        <a href="/home" className="navbar-brand logo">
          ZIGMA
        </a>
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
          <Nav.Item icon={<Icon icon="cog" />}>Settings</Nav.Item>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
};

export default AppNavbar;
