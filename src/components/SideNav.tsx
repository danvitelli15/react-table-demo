import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const SideNav = () => (
  <Nav className="flex-column" variant="pills">
    <Nav.Item>
      <Link to="/featureExamples/searchableColumns">Column Searching</Link>
    </Nav.Item>
    <Nav.Item>
      <Link to="/featureExamples/sortableColumns">Column Sorting</Link>
    </Nav.Item>
  </Nav>
);

export default SideNav;
