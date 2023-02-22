import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
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
      
      setaddress("");
          setcity("");
          setfirstName("");
          setlastname("");
          setemail("");
          setphone("");
          setcompany("");
          setstate("");
          setadbisorId("");
    let token = localStorage.getItem("JWT-Token");
      if(token==""){
        alert("not authorized");
      }
    
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
          setadbisorId(data.advisorID);
        })
    } catch (error) {
      console.log("Error-> ", error);
    }
  },[])







  return (
<>
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      <Sidenav />
      <div style={{ flex: 1, padding: '20px', overflowY: 'scroll' }}>
          
    <section className='100vh' style={{ backgroundColor: '#F9620A67' }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="10" className="mb-4 mb-lg-0">
            <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
              <MDBRow className="g-0">
                <MDBCol md="4" className="gradient-custom text-center text-black"
                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                  <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                    alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
                  <MDBTypography tag="h5">{firstname} {lastname}</MDBTypography>
                  <MDBCardText>Advisor</MDBCardText>
                  <MDBIcon far icon="edit mb-5" />
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h6">Advisor Id </MDBTypography>
                    <MDBCardText className="text-muted">{adbisorId}</MDBCardText>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBCardText className="text-muted">{email}</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Phone</MDBTypography>
                        <MDBCardText className="text-muted">{phone}</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Company</MDBTypography>
                      <MDBCardText className="text-muted">{company}</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Address</MDBTypography>
                        <MDBCardText className="text-muted">{address}</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">City</MDBTypography>
                        <MDBCardText className="text-muted">{city}</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">State</MDBTypography>
                        <MDBCardText className="text-muted">{state}</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
    </div>
    </div>

    </>
  );
};
