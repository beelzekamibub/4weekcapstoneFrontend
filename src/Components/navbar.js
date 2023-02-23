import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import logosmall from '../Images/logosmall.png';
import navlogo from '../Images/navlogo.png';
export class Navbarr extends Component {
  render() {
    const mystyle = {
      
      height:"40px",
      marginRight:"20px",
      
    
      
    };
    
    return (
      <>
        <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark" >
          <Container>
          
            <Navbar.Brand style={{marginRight:"20px"}} href="/">
            
            <img style={mystyle}
            src={navlogo}/>
            
            
            
            
            
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                {/* <Nav.Link href="/#about">About</Nav.Link> */}
              </Nav>
              <Nav>
                
                <Nav.Link style={{border:"1px solid #FFFFFF",marginRight:"20px",borderRadius:"10px",padding:"10%"}}href="/SignUpp">   SignUp </Nav.Link>
                <Nav.Link  style={{border:"1px solid #FFFFFF",borderRadius:"10px",padding:"10%"}} href="/loginadv">   SignIn </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}