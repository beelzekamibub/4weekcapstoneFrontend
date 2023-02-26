import React from "react";
import { Footer } from "../Components/footer";
import Navbarr from "../Components/navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../styles/forgetPassword.css";
import { useState } from "react";

export const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const ForgotPassword = (e) => {
    e.preventDefault();
    let values = {
      "email": email,
    };
    try {
      fetch("https://localhost:7061/api/User/Advisor-Forgot-password-without-login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE",
          "Access-Control-Max-Age": 86400,
        },
        body: JSON.stringify(values),
      })
        .then((res) => {
          if (res.status == 200) {
            window.location = '/loginadv';
            
            return res.text();
          }
          return res.text();
        })
        .then((data) => {
          alert(data);
          console.log(data);
        });
    } catch (error) {
      console.log("Error-> ", error);
    }
  }
  return (
    <>
      <Navbarr />
      <div className="forgetPassword">
        <Form style={{ borderRadius: "20px", boxShadow: "6px 6px 4px rgba(0, 0, 0, 0.2)" }} 
        className="forgetPasswordForm" 
        id="forgetPasswordForm">
          <h3 className="forgetPasswordHeader">Forgot Password</h3>
          <center> <p>
            Enter email to which reset link will be sent
          </p></center>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>
          <center><Button style={{ fontFamily: "Arial", borderRadius: "14px", width: "50%", borderTop: "0px" }}
            variant="primary"
            type="submit"
            onClick={ForgotPassword}
          >
            Send me the verification token
          </Button></center>
        </Form>
      </div>
      <Footer />
    </>
  );

}
