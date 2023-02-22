import { Sidenav } from "../Components/sidenav";
import Form from "react-bootstrap/Form";
import React, { Component, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Footer } from "../Components/footer";
import { useEffect } from "react";

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
    e.preventDefault();
    let values = {
      firstName: firstname,
      lastName: lastname,
      email: email,
      phone: phone,
      company: company,
      address: address,
      city: city,
      state: state,
      password: password,
      confirmPassword: confirmPassword,
    };
    alert(JSON.stringify(values));
    try {
      alert(ntokenn);
      fetch("https://localhost:7061/api/User/ClientRegister", {
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
          window.location = "/dashboardadv";
        });
    } catch (error) {
      console.log("Error-> ", error);
    }
  };
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      <Sidenav />
      <div className = {"everything"} style={{  flex: 1, padding: '20px', overflowY: 'scroll' }}>
      
        <Form className="signUpForm" id="signUpForm">
          <center>
            <img
              className="logo"
              src={require("../Images/logo.png")}
              alt="logo"
            />
          </center>
          <h3 className="signUpHeader">Add Client</h3>
          <p className="signUpText">
            Enter deatails of <b>Client</b>
          </p>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              type="text"
              placeholder="Enter your name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              type="text"
              placeholder="Enter your name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>E-mail</Form.Label>
            <Form.Control
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="phone"
              placeholder="Enter your phone number"
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} md controlId="formGridEmail" className="mb-3">
              <Form.Label>Company</Form.Label>
              <Form.Control
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                type="text"
                placeholder="Enter the name of the company"
              />
            </Form.Group>

            <Form.Group as={Col} md controlId="formGridPassword">
              <Form.Label>Address</Form.Label>
              <Form.Control
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                placeholder="Enter full address"
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md controlId="formGridPassword">
              <Form.Label>City</Form.Label>
              <Form.Control
                value={city}
                onChange={(e) => setCity(e.target.value)}
                type="text"
                placeholder="Enter the name of your city"
              />
            </Form.Group>

            <Form.Group as={Col} md controlId="formGridEmail" className="mb-3">
              <Form.Label>State</Form.Label>
              <Form.Control
                value={state}
                onChange={(e) => setState(e.target.value)}
                type="text"
                placeholder="Enter the name of the state"
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md controlId="formGridEmail" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter a strong password"
              />
            </Form.Group>

            <Form.Group as={Col} md controlId="formGridPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                type="password"
                placeholder="Confirm your password"
              />
            </Form.Group>
          </Row>

          <Button onClick={Register} type="submit">
            Register client
          </Button>

        </Form>
      </div>
    </div>
  );
};

export default AddClient;
