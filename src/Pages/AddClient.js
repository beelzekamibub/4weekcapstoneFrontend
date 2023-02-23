import { Sidenav } from "../Components/sidenav";
import Form from "react-bootstrap/Form";
import React, { Component, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Footer } from "../Components/footer";
import { useEffect } from "react";
import { MDBIcon } from 'mdb-react-ui-kit';
import "../styles/addclient.css";

export const AddClient = () => {

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [address, setAddress] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const [ntokenn,setNtokenn] = useState("");

  
  useEffect(() => {
    let token = localStorage.getItem("JWT-Token");
    
    if(token==""){
      alert("not authorized");
    }
    
    let ntoken = "Bearer " + token.replaceAll('"', '');
    
    setNtokenn(ntoken);
  },[])


  const Register = (e) => {
    alert(localStorage.getItem("advid"));
    e.preventDefault();
    let values={
      firstName: firstname,
      lastName: lastname,
      roleID: 2,
      email: email,
      advisorID: localStorage.getItem("advid"),
      phone: phone,
      company: company,
      address: address,
      city: city,
      state: state,
      password: password,
      confirmPassword: confirmPassword
    };
    alert(JSON.stringify(values));
    try {
      alert(ntokenn);
      fetch("https://localhost:7061/api/User/Registration", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE",
          "Authorization": ntokenn,
          "Access-Control-Max-Age": 86400
        },
        body: JSON.stringify(values),
      })
        .then((res) => {
          alert(res.status);
          if (res.status === 200) alert("User Registered");
        })
        .then((data) => {
          alert(data);
          if (data === "Undefined") alert("some error occured");
          console.log(data);
          window.location = "/clientlist";
        });
    } catch (error) {
      console.log("Error-> ", error);
    }
  };
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' ,backgroundColor:"#FAFAFD"}}>
      <Sidenav />
      <div className = {"everything"} style={{  flex: 1, padding: '20px',overflowY:"scroll"}}>
      
        <Form style={{borderRadius:"20px",boxShadow:"6px 6px 4px rgba(0, 0, 0, 0.2)"}} className="signUpForm" id="signUpForm">
          <center>
            <img
            style={{width:"16%",height:"41%"}}
              className="logoimg"
              src={require("../Images/logo.png")}
              alt="logo"
            />
           <span style={{fontWeight:"700",fontSize:"120%"}}> Add Client</span>
           
           <p>Enter details of new<b> Client</b> here</p>
           <hr></hr>
          </center>
          <Row>
            <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            
            <Form.Control
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              type="text"
              placeholder="First name"
            />
          </Form.Group>
            </Col>
            <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            
            <Form.Control
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              type="text"
              placeholder="Last name"
            />
          </Form.Group>
            </Col>
          </Row>
         
          <Row>
            <Col>
            <Form.Group className="mb-3" controlId="formBasicPassword">
            
            <Form.Control
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
            />
          </Form.Group>
            </Col>
            <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            
            <Form.Control
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="phone"
              placeholder="Phone"
            />
          </Form.Group>
            </Col>
          </Row>
          
         

          <Row >
            <Form.Group as={Col} md controlId="formGridEmail" className="mb-3">
              
              <Form.Control
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                type="text"
                placeholder="Company name"
              />
            </Form.Group>

            <Form.Group as={Col} md controlId="formGridPassword">
              
              <Form.Control
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                placeholder="Full address"
              />
            </Form.Group>
          </Row>

          <Row >
            <Form.Group as={Col} md controlId="formGridPassword">
             
              <Form.Control
                value={city}
                onChange={(e) => setCity(e.target.value)}
                type="text"
                placeholder="City"
              />
            </Form.Group>

            <Form.Group as={Col} md controlId="formGridEmail" className="mb-3">
              
              <Form.Control
                value={state}
                onChange={(e) => setState(e.target.value)}
                type="text"
                placeholder="State"
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md controlId="formGridEmail" className="mb-3">
              
              <Form.Control
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Set a password"
              />
            </Form.Group>

            <Form.Group as={Col} md controlId="formGridPassword">
              {/* <Form.Label>Confirm Password</Form.Label> */}
              <Form.Control
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                type="password"
                placeholder="Confirm password"
              />
            </Form.Group>
          </Row>
<center>
<Button  style={{fontFamily:"Arial",borderRadius:"14px",borderTop:"10%"}} onClick={Register} type="submit">
            Register Client
          </Button >
</center>
          

        </Form>
      </div>
    </div>
  );
};

export default AddClient;
