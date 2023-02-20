import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Sidenav } from "../Components/sidenav";
import { useState,useEffect } from "react";
export const AdviserProfile = () => {
    const [firstname,setfirstName]=useState("");
    const [lastname,setlastname]=useState("");
    const [email,setemail]=useState("");
    const [phone,setphone]=useState("");
    const [company,setcompany]=useState("");
    const [city,setcity]=useState("");
    const [state,setstate]=useState("");
    const [address,setaddress]=useState("");
    const [adbisorId,setadbisorId]=useState("");

    var ntokenn = "";
  useEffect(() => {

    let token = localStorage.getItem("JWT-Token");
    let ntoken = "Bearer " + token.replaceAll('"', '');
    ntokenn = ntoken;

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
          setaddress(data.address);
          setcity(data.city);
          setfirstName(data.firstName);
          setlastname(data.lastName);
          setemail(data.email);
          setphone(data.phone);
          setcompany(data.company);
          setstate(data.state);
          setadbisorId(data.adbisorId);
        })
    } catch (error) {
      console.log("Error-> ", error);
    }
  },[])







  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidenav />
      <div style={{ flex: 1, padding: "20px" }}>
        <div>
          <Container>
            <Row>
              <Col>
                <h1>Profile</h1>
                <hr />
                <p>
                  <strong>First Name:</strong> {firstname}
                </p>
                <p>
                  <strong>Last Name:</strong> {lastname}
                </p>
                <p>
                  <strong>E-mail:</strong> {email}
                </p>
                <p>
                  <strong>Phone Number:</strong> {phone}
                </p>
                <p>
                  <strong>Company:</strong> {company}
                </p>
                <p>
                  <strong>Address:</strong> {address}
                </p>
                <p>
                  <strong>City:</strong> {city}
                </p>
                <p>
                  <strong>State:</strong> {state}
                </p>
                <p>
                  <strong>Advisor Id:</strong> {adbisorId}
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};
