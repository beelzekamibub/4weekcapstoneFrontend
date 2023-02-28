import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logosmall from '../Images/logosmall.png';
import navlogo from '../Images/navlogo.png';
import "../styles/navbar.css";


function Navbarr() {
  return (
    <>
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark" >
        <Container>
          <Navbar.Brand style={{ marginRight: "20px" }} href="/">
            <img style={{ height: "40px", marginRight: "20px" }}
              src={navlogo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
              <Nav.Link className="up"  href="/SignUpp">   SignUp </Nav.Link>
              <Nav.Link className="in"  href="/loginadv">   SignIn </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbarr
