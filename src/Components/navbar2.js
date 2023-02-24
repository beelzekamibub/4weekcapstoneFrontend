import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { MDBIcon } from "mdb-react-ui-kit";
import navlogo from '../Images/navlogo.png';
import logosmall from '../Images/logosmall.png';
//import navlogo from '../Images/navlogo.png';
export class Navbar2 extends Component {
  render() {
    const mystyle = {
      
      height:"40px",
      marginRight:"20px",
      
    
      
    };
    
    return (
      <>
        <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark" >
          <Container>
          
            <Navbar.Brand style={{marginRight:"20px"}} href="/clientlist">
            
            <img style={mystyle}
            src={navlogo}/>
            
            
            
            
            
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                {/* <Nav.Link href="/#about">About</Nav.Link> */}
              
                <Nav.Link  style={{border:"1px solid #FFFFFF",borderRadius:"10px",padding:"10%"}} href="/clientlist">   Clients </Nav.Link>
              </Nav>


              <Nav>
              
                <Nav.Link  href="/profileadv">
                <div  style={{display:"flex",justifyContent:"flex-end",marginTop:"2px",marginBottom:"6px",cursor:"pointer", marginRight:"25px"}}>
      <span className="signout" style={{marginRight:"2%",fontWeight:"700",backgroundColor:"#212529",color:"white",padding:"4%",borderRadius:"14px"}}>
      <center>
      
      <MDBIcon style={{marginRight:"5%"}}icon="user" size="1.5x"/>
     
      </center>
    
      </span>
        
      </div>
                </Nav.Link>

                <Nav.Link href="/">
                <div  style={{display:"flex",justifyContent:"flex-end",marginTop:"2px",marginBottom:"6px",cursor:"pointer", marginRight:"2px"}}>
      <span className="signout" style={{fontWeight:"700",backgroundColor:"#212529",color:"white",padding:"1%",borderRadius:"14px"}}>
      <center>
      {/* <span style={{marginRight:"10%"}}>Sign Out</span> */}
      <MDBIcon  style={{marginLeft:"14%"}}icon="power-off" size="1.5x"/>
     
      </center>
    
      </span>
        
      </div>
                </Nav.Link>
            
                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}