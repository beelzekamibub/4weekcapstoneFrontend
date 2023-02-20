import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logosmall from '../Images/logosmall.png';
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
            src={logosmall}/>
            
            
            
            
            Home
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                {/* <Nav.Link href="/#about">About</Nav.Link> */}
              </Nav>
              <Nav>
                <NavDropdown title="Login" id="collasible-nav-dropdown" style={{marginRight:"10px", color:"white"}}>
                  <NavDropdown.Item href="/logininvs">
                    Login As Investor
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/loginadv">
                    Login As Advisor
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/SignUpp">SignUp</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}