import React, { Component, useState } from "react";
import { Footer } from "../Components/footer";
import { Navbarr } from "../Components/navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../styles/SignUp.css";

function SignUpp() {
  
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



  const Register = (e) => {
    e.preventDefault();
    let values = {
      "firstName": firstname,
      "lastName": lastname,
      "email": email,
      "phone": phone,
      "company": company,
      "address": address,
      "city": city,
      "state": state,
      "password": password,
      "confirmPassword": confirmPassword,
    };



    try {
      console.log("made a fetch call");
      fetch("https://localhost:7061/api/Auth/Register", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE",
          "Access-Control-Max-Age": 86400,
        },
        body: JSON.stringify(values),
      })
        .then((res) => {if(res.status===200)alert("User Registered")})
        .then((data) => {
          if(data === "Undefined")alert("some error occured")
          console.log(data);
          window.location='/Loginadv'
        });
    } catch (error) {
      console.log("Error-> ", error);
    }
  };

  return (
    <div>
      <Navbarr />
      <div className="everything" style={{ marginTop: "5%" }}>
        <Form className="signUpForm" id="signUpForm">
          <center>
            <img
              className="logo"
              src={require("../Images/logo.png")}
              alt="logo"
            />
          </center>
          <h3 className="signUpHeader">Adviser's SignUp</h3>
          <p className="signUpText">
            Enter deatails to create your <b>Adviser</b> account
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
            Sign Up
          </Button>

          <div id="clickHereButtonId">
            <p className="clickHereClass">Already have an account</p>
            <Button
              variant="link"
              size="sm"
              className="clickHereclass"
              id="clickHereId"
              href="/Loginadv"
            >
              Sign In
            </Button>
          </div>
        </Form>
      </div>
      <Footer />
    </div>
  );
}
export default SignUpp;
