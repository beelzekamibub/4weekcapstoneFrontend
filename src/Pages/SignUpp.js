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
  const [validated, setValidated] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };


  const Register = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    // if (form.checkValidity() === false) {
    //   e.preventDefault();
    //   e.stopPropagation();
    // }
    if(form.checkValidity() === true) {
      setValidated(true);


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
      "confirmPassword": confirmPassword
    };

    try {
      console.log("made a fetch call");
      fetch("https://localhost:7061/api/User/AdvisorRegister", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE",
          "Access-Control-Max-Age": 86400,
        },
        body: JSON.stringify(values),
      }
      ).then((res) => {
          if(res.status===200){alert("User Registered");window.location='/Loginadv'}
          if(res.status!==200){alert("something went wrong");window.location='/SignUpp'}
        })
        .then((data) => {
          if(data === "Undefined"){
            alert("some error occured");
          }
          console.log(data);
        });
    } catch (error) {
      console.log("Error-> ", error);
      }
    }

    
  };

  // for password
  const [passwordError, setPasswordErr] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [passwordInput, setPasswordInput] = useState({
    password: "",
    confirmPassword: "",
  });

  const handlePasswordChange = (evnt) => {
    const passwordInputValue = evnt.target.value.trim();
    const passwordInputFieldName = evnt.target.name;
    if (evnt.target.name == "password"){
      setPassword(evnt.target.value)
    }else{
      setConfirmPassword(evnt.target.value)
    }
    const NewPasswordInput = {
      ...passwordInput,
      [passwordInputFieldName]: passwordInputValue,
    };
    setPasswordInput(NewPasswordInput);
  };

  const handleValidation = (evnt) => {
    const passwordInputValue = evnt.target.value.trim();
    const passwordInputFieldName = evnt.target.name;

    if (passwordInputFieldName === "password") {
      const uppercaseRegExp = /(?=.*?[A-Z])/;
      const lowercaseRegExp = /(?=.*?[a-z])/;
      const digitsRegExp = /(?=.*?[0-9])/;
      const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
      const minLengthRegExp = /.{8,}/;

      const passwordLength = passwordInputValue.length;
      const uppercasePassword = uppercaseRegExp.test(passwordInputValue);
      const lowercasePassword = lowercaseRegExp.test(passwordInputValue);
      const digitsPassword = digitsRegExp.test(passwordInputValue);
      const specialCharPassword = specialCharRegExp.test(passwordInputValue);
      const minLengthPassword = minLengthRegExp.test(passwordInputValue);

      let errMsg = "";
      if (passwordLength === 0) {
        errMsg = "Password is empty";
      } else if (!uppercasePassword) {
        errMsg = "At least one Uppercase";
      } else if (!lowercasePassword) {
        errMsg = "At least one Lowercase";
      } else if (!digitsPassword) {
        errMsg = "At least one digit";
      } else if (!specialCharPassword) {
        errMsg = "At least one Special Characters";
      } else if (!minLengthPassword) {
        errMsg = "At least minumum 8 characters";
      } else {
        errMsg = "";
      }
      setPasswordErr(errMsg);
    }

    // for confirm password
      if (
        passwordInputFieldName === "confirmPassword" ||
        (passwordInputFieldName === "password" &&
          passwordInput.confirmPassword.length > 0)
      ) {
        if (passwordInput.confirmPassword !== passwordInput.password) {
          setConfirmPasswordError("Confirm password is not matched");
        } else {
          setConfirmPasswordError("");
        }
      }
    };


  return (
    <div>
      <Navbarr />
      <div className="everything" style={{ marginTop: "5%" }}>
      <Form
          className="signUpForm"
          id="signUpForm"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
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
          <Form.Group className="mb-3" controlId="formBasicEmail validationCustom01">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              type="text"
              placeholder="Enter your name"
              required
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail validationCustom02">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              type="text"
              placeholder="Enter your last name"
              required
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword validationCustom03">
            <Form.Label>E-mail</Form.Label>
            <Form.Control
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
              required
            />
            <Form.Control.Feedback type="invalid">
              "Please provide a valid eamil."
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail validationCustom04">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="phone"
              placeholder="Enter your phone number"
              required
            />
            <Form.Control.Feedback type="invalid">
            Please provide a valid Phone Number.
            </Form.Control.Feedback>
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} md controlId="formGridEmail validationCustom05" className="mb-3">
              <Form.Label>Company</Form.Label>
              <Form.Control
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                type="text"
                placeholder="Enter the name of the company"
              />
            </Form.Group>

            <Form.Group as={Col} md controlId="formGridPassword validationCustom06">
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
            <Form.Group as={Col} md controlId="formGridPassword validationCustom07">
              <Form.Label>City</Form.Label>
              <Form.Control
                value={city}
                onChange={(e) => setCity(e.target.value)}
                type="text"
                placeholder="Enter the name of your city"
              />
            </Form.Group>

            <Form.Group as={Col} md controlId="formGridEmail validationCustom08" className="mb-3">
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
            <Form.Group as={Col} md controlId="formGridEmail validationCustom09" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control required
                type="password"
                
                value={passwordInput.password} onChange={handlePasswordChange} onKeyUp={handleValidation} name="password" placeholder="Password" className="form-control"
              />
              <p className="text-danger">{passwordError}</p>

            </Form.Group>

            <Form.Group as={Col} md controlId="formGridPassword validationCustom10">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                required
                type = "password"
                value={passwordInput.confirmPassword} onChange={handlePasswordChange} onKeyUp={handleValidation} name="confirmPassword" placeholder="Password" className="form-control"
                
              />
              <p className="text-danger">{confirmPasswordError}</p>
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
