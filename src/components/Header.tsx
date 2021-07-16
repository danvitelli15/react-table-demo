import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => (
  <Navbar variant="dark">
    <Navbar.Brand>Home</Navbar.Brand>
    <Nav>
      <Nav.Link>
        <Link to="/featureExamples">Features</Link>
      </Nav.Link>
    </Nav>
  </Navbar>
);

export default Header;
