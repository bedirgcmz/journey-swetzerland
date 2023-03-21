import React from "react";
import "./JourneyHeader.css";
import { Navbar, Nav, NavLink, NavItem } from "reactstrap";

/**
 * This function creates a Navbar component.
 * @returns Navbar
 */
const JourneyHeader = () => {
  return (
    <div className="navbar-container">
      <Navbar className="navbar" expand="md" light>
        <h2 className="navbar-logo relative">Journey</h2>
        <span className="for-swetzerland">For Switzerland</span>
        <Nav className="ms-auto" navbar>
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>
          {/* <NavItem>
            <NavLink to="/about">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="contact">Contact</NavLink>
          </NavItem> */}
        </Nav>
      </Navbar>
    </div>
  );
};

export default JourneyHeader;
