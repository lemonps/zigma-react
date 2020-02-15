import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav, Dropdown, Icon } from "rsuite";

const AppNavbar = () => {
  return (
    <Navbar style={{ background: "#344381" }}>
      <Navbar.Header>
        <Nav>
          <NavLink to="/home" className="navbar-brand logo">
            <p style={{ padding: 10 }}>ZIGMA</p>
          </NavLink>
        </Nav>
      </Navbar.Header>
      <Navbar.Body>
        <Nav>
          <Dropdown title="My Loan">
            <Dropdown.Item>
              <NavLink to="/investormarketplace" className="navbar-brand logo">
                Market Place
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item>
              <NavLink to="/borrower_dashBoard" className="navbar-brand logo">
                Borrower DashBoard
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item>
              <NavLink to="/bid/4822">bid</NavLink>
            </Dropdown.Item>
          </Dropdown>
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
