import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { MDBIcon } from "mdb-react-ui-kit";
import navlogo from '../Images/navlogo.png';
import logosmall from '../Images/logosmall.png';
import { useEffect,useState } from "react";

function Navbar2() {
  const [firstname, setfirstName] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [company, setcompany] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [address, setaddress] = useState("");
  const [adbisorId, setadbisorId] = useState("");
  useEffect(() => {

    let token = localStorage.getItem("JWT-Token");

    if (token == "") {
      alert("not authorized");
      window.location = '/loginadv'
    }
    token = "Bearer " + token.replaceAll('"', '');

    try {
      console.log("made a get call");
      fetch("https://localhost:7061/api/User/Advisor-Info", {
        method: "GET",
        headers: {
          'Content-type': 'application/json',
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE",
          "Authorization": token,
          "Access-Control-Max-Age": 86400
        }
      })
        .then(res => res.json())
        .then((data) => {
          setaddress(data.address);
          setcity(data.city);
          setfirstName(data.firstName);
          setlastname(data.lastName);
          setemail(data.email);
          setphone(data.phone);
          setcompany(data.company);
          setstate(data.state);
          setadbisorId(data.advisorID);

        })
    } catch (error) {
      console.log("Error-> ", error);
    }


  })
  const signout = () => {

    localStorage.setItem("JWT-Token", "");
    window.location = '/';
  }

  return (
    <>
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark" >
        <Container>
          <Navbar.Brand style={{ marginRight: "20px" }} href="/clientlist">
            <img style={{height: "40px",marginRight: "20px"}}
            src={navlogo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link style={{ padding: "10%" }} href="/clientlist"> 
              <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "2px", marginBottom: "6px", cursor: "pointer", marginRight: "25px" }}>
                  <span className="signout" style={{ marginRight: "2%", fontWeight: "700", backgroundColor: "#212529", color: "white", padding: "4%", borderRadius: "14px" }}>
                    <center>
                        
                        <MDBIcon style={{ marginRight: "5%" }} icon="list" size="1.5x" />
                    </center>
                  </span>
                </div>
              </Nav.Link>
            </Nav>
            
            <Nav>
            <div className="hstack gap-5">
              <Nav.Link href="/profileadv">
                <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "2px", marginBottom: "6px", cursor: "pointer", marginRight: "25px" }}>
                  <span className="signout" style={{ marginRight: "2%", fontWeight: "700", backgroundColor: "#212529", color: "white", padding: "4%", borderRadius: "14px" }}>
                    <center>
                    <div className="hstack gap-3">
                      {firstname}
                        <MDBIcon style={{ marginRight: "5%" }} icon="user" size="1.5x" />
                    </div>                        
                    </center>
                  </span>
                </div>
              </Nav.Link>
              <Nav.Link href="/">
                <div onClick={signout} style={{ display: "flex", justifyContent: "flex-end", marginTop: "2px", marginBottom: "6px", cursor: "pointer", marginRight: "2px" }}>
                  <span className="signout" style={{ fontWeight: "700", backgroundColor: "#212529", color: "white", padding: "1%", borderRadius: "14px" }}>
                    <center>
                      <MDBIcon style={{ marginLeft: "14%" }} icon="power-off" size="1.5x" />
                    </center>
                  </span>
                </div>
              </Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbar2

