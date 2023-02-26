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
import Navbar2  from "../Components/navbar2";

export const AddClient = () => {


  // const [firstname,setfirstName]=useState("");
  // const [lastname,setlastname]=useState("");
  // const [email,setemail]=useState("");
  // const [phone,setphone]=useState("");
  // const [company,setcompany]=useState("");
  // const [city,setcity]=useState("");
  // const [state,setstate]=useState("");
  // const [address,setaddress]=useState("");
  const [adbisorId,setadbisorId]=useState("");



  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Company, setCompany] = useState("");
  const [City, setCity] = useState("");
  const [State, setState] = useState("");
  const [Address, setAddress] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const [bearertoken, setBearertoken] = useState("");


  useEffect(() => {
    let token = localStorage.getItem("JWT-Token");
      if(token==""){
        alert("not authorized");
      }
    
    let ntoken = "Bearer " + token.replaceAll('"', '');
    setBearertoken(ntoken);
    try {
      console.log("made a get call");
      fetch("https://localhost:7061/api/User/Advisor-Info", {
        method: "GET",
        headers: {
          'Content-type': 'application/json',
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE",
          "Authorization": ntoken,
          "Access-Control-Max-Age": 86400
        }
      })
        .then(res => res.json())
        .then((data) => {
          // setaddress(data.address);
          // setcity(data.city);
          // setfirstName(data.firstName);
          // setlastname(data.lastName);
          // setemail(data.email);
          // setphone(data.phone);
          // setcompany(data.company);
          // setstate(data.state);
          setadbisorId(data.advisorID);
        })
    } catch (error) {
      console.log("Error-> ", error);
    }
  }, [])


  const Register = (e) => {

    e.preventDefault();
    let values = {
      firstName: firstName,
      lastName: lastName,
      roleID: 2,
      email: Email,
      advisorID: adbisorId,
      phone: Phone,
      company: Company,
      address: Address,
      city: City,
      state: State,
      password: password,
      confirmPassword: confirmPassword
    };

    try {

      fetch("https://localhost:7061/api/User/Registration", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE",
          "Authorization": bearertoken,
          "Access-Control-Max-Age": 86400
        },
        body: JSON.stringify(values),
      })
        .then((res) => {

          if (res.status === 200) alert("User Registered");
        })
        .then((data) => {

          if (data === "Undefined") alert("some error occured");
          console.log(data);
          window.location = "/clientlist";
        });
    } catch (error) {
      console.log("Error-> ", error);
    }
  };
  return (

    <>
      <Navbar2 />
      <div className="container" style={{ marginTop: "7%" }}>
        <center>

          <Form style={{ borderRadius: "20px", boxShadow: "6px 6px 4px rgba(0, 0, 0, 0.2)" }} className="signUpForm" id="signUpForm">
            <center>
              <img
                style={{ width: "16%", height: "41%" }}
                className="logoimg"
                src={require("../Images/logo.png")}
                alt="logo"
              />
              <span style={{ fontWeight: "700", fontSize: "120%" }}> Add Client</span>

              <p>Enter details of new<b> Client</b> here</p>
              <hr></hr>
            </center>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                  <Form.Control
                    value={firstName}
                    onChange={(e) => setFirstname(e.target.value)}
                    type="text"
                    placeholder="First name"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                  <Form.Control
                    value={lastName}
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
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                  <Form.Control
                    value={Phone}
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
                  value={Company}
                  onChange={(e) => setCompany(e.target.value)}
                  type="text"
                  placeholder="Company name"
                />
              </Form.Group>

              <Form.Group as={Col} md controlId="formGridPassword">

                <Form.Control
                  value={Address}
                  onChange={(e) => setAddress(e.target.value)}
                  type="text"
                  placeholder="Full address"
                />
              </Form.Group>
            </Row>

            <Row >
              <Form.Group as={Col} md controlId="formGridPassword">

                <Form.Control
                  value={City}
                  onChange={(e) => setCity(e.target.value)}
                  type="text"
                  placeholder="City"
                />
              </Form.Group>

              <Form.Group as={Col} md controlId="formGridEmail" className="mb-3">

                <Form.Control
                  value={State}
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
              <Button style={{ fontFamily: "Arial", borderRadius: "14px", borderTop: "10%" }} onClick={Register} type="submit">
                Register Client
              </Button >
            </center>


          </Form>
        </center>
      </div>
    </>
  );
};

export default AddClient;
