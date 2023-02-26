import React, { useState } from "react";
import { Footer } from "../Components/footer";
import Navbarr from "../Components/navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../styles/Logininvs.css";
import axios from "axios";

export const Logininvs = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const ForgotPassword = ()=>{

  }
  const SignIn = (e) => {
    e.preventDefault();
    let values = {
      "email": email,
      "password": password,
    };

    try {
      console.log("made a fetch call");
      fetch("https://localhost:7061/api/User/AdvisorLogin", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE",
          "Access-Control-Max-Age": 86400,
        },
        body: JSON.stringify(values),
      })
        .then((res) => {if(res.status===200)alert("User Registered");
                        console.log(res.body);})
        .then((data) => {
          if(data === "Undefined")alert(data)
          console.log(data);
          window.location='/dashboardinvs'
        });
    } catch (error) {
      console.log("Error-> ", error);
    }
  };

  return (
    <>
      <Navbarr />
      <center>
      <div className="wholeLoginadvPage" style={{marginTop:"6%"}}>
        <Form className="signInForm" id="signInForm">
          <center>
            <img
              className="logo"
              src={require("../Images/logo.png")}
              alt="logo"
            />
          </center>
          <h3 className="signUpHeader">Investor's SignIn</h3>
          <p className="signUpText">Let's build your Portfolio</p>
          <Form.Group className="mb-3" controlId="formBasicEmail1" md="true">
            <Form.Label>Email</Form.Label>
            <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail" md="true">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              type="password"
            />
          </Form.Group>
          
          <Button onClick={SignIn} variant="primary" type="submit">
            Sign In
          </Button>
          <Button variant="link" size="sm" id="abc" href="/forgetPassword">
            Forgot Password?
          </Button>
        </Form>
      </div>
      </center>
      <Footer />
    </>
  );
};
