import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import { Container, Row, Col } from "react-bootstrap";
import { Sidenav } from "../Components/sidenav";
import { useState,useEffect } from "react";
import picprofile from "../Images/picprofile.png"
import "../styles/advprofile.css";
import Navbar2  from "../Components/navbar2";

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

    useEffect(() => {

    let token = localStorage.getItem("JWT-Token");
      if(token==""){
        alert("not authorized");
      }
    
    let ntoken = "Bearer " + token.replaceAll('"', '');
    
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
<Navbar2 />
      <div  style={{display:"flex",justifyContent:"flex-end",marginTop:"2px",marginBottom:"6px",cursor:"pointer"}}>
      <span className="signout" style={{marginRight:"2%",fontWeight:"700",backgroundColor:"#212529",color:"white",padding:"1%",borderRadius:"14px"}}>
      <center>
      <span style={{marginRight:"10%"}}>Sign Out</span>
      <MDBIcon style={{marginLeft:"1%"}}icon="power-off" size="1.5x"/>
      </center>
      </span>
      </div>
    <section className='100vh' >
      <MDBContainer className="py-5 h-100"  >
        <MDBRow className="justify-content-center align-items-center h-100" >
          <MDBCol lg="10" className="mb-4 mb-lg-0" style={{border:"none"}}>
            <MDBCard className="mb-3" style={{ borderRadius: '40px' }}>
              <MDBRow className="g-0">
                <MDBCol md="4" className="gradient-custom text-center text-black"
                  >
                  <div style={{marginTop:"20%"}}><MDBCardImage src={picprofile}
                    alt="Avatar" style={{ width: '50%',backgroundColor:"#F58142" }} fluid />
                  <MDBTypography tag="h5">{firstname} {lastname}</MDBTypography>
                  <MDBCardText ><h2 style={{marginBottom:"15%"}} >Advisor</h2></MDBCardText></div>
                </MDBCol>
                <MDBCol md="8" >
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h6"><h3>Advisor Id</h3> </MDBTypography>
                    <MDBCardText className="text-muted">{adbisorId}</MDBCardText>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3" style={{backgroundColor:"#ffffff"}}>
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
    </>
  );
};
