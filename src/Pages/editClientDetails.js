
import Form from "react-bootstrap/Form";
import React, { Component} from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Footer } from "../Components/footer";
import { MDBIcon } from 'mdb-react-ui-kit';
import "../styles/addclient.css";
import Navbar2  from "../Components/navbar2";
import { useParams } from "react-router-dom";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography } from 'mdb-react-ui-kit';
import { Container } from "react-bootstrap";
import { Sidenav } from "../Components/sidenav";
import { useState,useEffect } from "react";
import picprofile from "../Images/picprofile.png"
import "../styles/advprofile.css";

export const EditClientDetails = () => {
  let { EcliID } = useParams();

  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Company, setCompany] = useState("");
  const [City, setCity] = useState("");
  const [State, setState] = useState("");
  const [Address, setAddress] = useState("");


  const [clientfirstname,setclientfirstname]=useState("");
  const [clientlastname,setclientlastname]=useState("");
  const [clientemail,setclientemail]=useState("");
  const [clientphone,setclientphone]=useState("");
  const [clientcompany,setclientcompany]=useState("");
  const [clientcity,setclientcity]=useState("");
  const [clientstate,setclientstate]=useState("");
  const [clientaddress,setclientaddress]=useState("");




  const Update=(e)=>{
    let token = localStorage.getItem("JWT-Token");

    if (token == "") {
      alert("not authorized");
      window.location = '/loginadv'
    }
    token = "Bearer " + token.replaceAll('"', '');
    e.preventDefault();
    let values = {
      
        "lastName": clientlastname,
        "firstName": clientfirstname,
        "company": clientcompany,
        "address": clientaddress,
        "city": clientcity,
        "state": clientstate,
        "phone": clientphone,
        "email": clientemail,
        "advisorID": "string"
      
    };

    try {

      fetch(`https://localhost:7061/api/User/Update=${EcliID}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE",
          "Authorization": token,
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

  }

  useEffect(() => {

    let token = localStorage.getItem("JWT-Token");

    if (token == "") {
      alert("not authorized");
      window.location = '/loginadv'
    }
    token = "Bearer " + token.replaceAll('"', '');

    try {
      console.log("made a get call");
      fetch(`https://localhost:7061/api/User/clientInfo?id=${EcliID}`, {
        method: "GET",
        headers: {
          'Content-type': 'application/json',
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE",
          "Authorization": token,
          "Access-Control-Max-Age": 86400
        }
      })
        .then(res => res.json())
        .then((data) => {

          setAddress(data.address);
          setCity(data.city);
          setFirstname(data.firstName);
          setLastname(data.lastName);
          setEmail(data.email);
          setPhone(data.phone);
          setCompany(data.company);
          setState(data.state);

        })
    } catch (error) {
      console.log("Error-> ", error);
    }

  })

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
                  <MDBTypography tag="h5">{firstName} {lastName}</MDBTypography>
                  </div>
                </MDBCol>
                <MDBCol md="8" >
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h6"><h3>OLD DETAILS</h3> </MDBTypography>
                    
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3" style={{backgroundColor:"#ffffff"}}>
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBCardText className="text-muted">{Email}</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Phone</MDBTypography>
                        <MDBCardText className="text-muted">{Phone}</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Company</MDBTypography>
                      <MDBCardText className="text-muted">{Company}</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Address</MDBTypography>
                        <MDBCardText className="text-muted">{Address}</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">City</MDBTypography>
                        <MDBCardText className="text-muted">{City}</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">State</MDBTypography>
                        <MDBCardText className="text-muted">{State}</MDBCardText>
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
      <div className="container" >
        <center>
          <Form style={{ borderRadius: "15px", boxShadow: "6px 6px 4px rgba(0, 0, 0, 0.2)" }} className="signUpForm" id="signUpForm">
            <center>
              <p>Enter new details of <b>Client</b> here</p>
              <hr></hr>
            </center>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                  <Form.Control
                    value={clientfirstname}
                    onChange={(e) => setclientfirstname(e.target.value)}
                    type="text"
                    placeholder="First name"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                  <Form.Control
                    value={clientlastname}
                    onChange={(e) => setclientlastname(e.target.value)}
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
                    value={clientemail}
                    onChange={(e) => setclientemail(e.target.value)}
                    type="email"
                    placeholder="Email"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                  <Form.Control
                    value={clientphone}
                    onChange={(e) => setclientphone(e.target.value)}
                    type="phone"
                    placeholder="Phone"
                  />
                </Form.Group>
              </Col>
            </Row>



            <Row >
              <Form.Group as={Col} md controlId="formGridEmail" className="mb-3">

                <Form.Control
                  value={clientcompany}
                  onChange={(e) => setclientcompany(e.target.value)}
                  type="text"
                  placeholder="Company name"
                />
              </Form.Group>

              <Form.Group as={Col} md controlId="formGridPassword">

                <Form.Control
                  value={clientaddress}
                  onChange={(e) => setclientaddress(e.target.value)}
                  type="text"
                  placeholder="Full address"
                />
              </Form.Group>
            </Row>

            <Row >
              <Form.Group as={Col} md controlId="formGridPassword">

                <Form.Control
                  value={clientcity}
                  onChange={(e) => setclientcity(e.target.value)}
                  type="text"
                  placeholder="City"
                />
              </Form.Group>

              <Form.Group as={Col} md controlId="formGridEmail" className="mb-3">

                <Form.Control
                  value={clientstate}
                  onChange={(e) => setclientstate(e.target.value)}
                  type="text"
                  placeholder="State"
                />
              </Form.Group>
            </Row>
            <center>
              <Button style={{ fontFamily: "Arial", borderRadius: "14px", borderTop: "10%" }} onClick={Update} type="submit">
                Update Client
              </Button >
            </center>


          </Form>
        </center>
      </div>
    </>

    
  );
};