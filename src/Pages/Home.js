import React, { useState } from "react";
import { Footer } from "../Components/footer";
import { Navbarr } from "../Components/navbar";
import MyTypewriterComponentt from "../Components/MyTypewriterComponent.js";
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";
import "../styles/Home.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { BiSupport, BiSync } from "react-icons/bi";
import { AiOutlineToTop } from "react-icons/ai";
import { Container, Row, Col } from "react-bootstrap";

function Home(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const ForgotPassword=()=>{
    
  }
  const SignIn = (e) => {
    e.preventDefault();
    let values = {
      "email": email,
      "password": password,
    };

    try {
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
        .then((res) => {
          
          if(res.status==200){
            window.location='/dashboardadv';
            return res.text();
            }
            return res.text();
          
          })
        .then((data) => {
          localStorage.setItem("JWT-Token", JSON.stringify(data));
        });
    } catch (error) {
      console.log("Error-> ", error);
    }
  };

  return (
    <>
      <Navbarr />
      <div style={{ marginTop: "66px" }}>
        <MDBContainer className="containerhome">
          <MDBRow className="containerrow">
            <MDBCol>
              <div className="lefthome">
                <h6 className="titlehome">PortfolioPilot</h6>
                <div className="typing">
                  <MyTypewriterComponentt />
                </div>
              </div>
            </MDBCol>
            <MDBCol>
              <Form className="signInForm" id="signInForm">
                <center>
                  <img
                    className="logo"
                    src={require("../Images/logo.png")}
                    alt="logo"
                  />
                </center>
                <h3 className="signInHeader">Advisor's SignIn</h3>
                <p className="signInText">
                  Admin access via <b>Advisor</b> Account
                </p>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Password</Form.Label>
                  <Form.Control value={password} onChange={(e)=>setPassword(e.target.value)} type="password" />
                </Form.Group>

                <Button onClick={SignIn} variant="primary" type="submit">
                  Sign In
                </Button>

                <Button onClick={ForgotPassword}
                  variant="link"
                  size="sm"
                  id="abc"
                  href="/forgetPassword"
                >
                  Forgot Password?
                </Button>
                <div>
                  <p className="clickHereClass">Don't have an account?</p>
                  <Button variant="link" size="sm" className="clickHereclass" id="clickHereId" href="/SignUp"> Sign Up </Button>
                </div>
              </Form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <Container>
          <h2
            className="text-center"
            style={{
              marginBottom: "3%",
              marginTop: "2%",
              fontFamily: "Kanit",
              fontWeight: "700",
            }}
          >
            Salient Features
          </h2>
        </Container>

        <Container>
          <Row>
            <Col xs={12} md={4}>
              <Card style={{ backgroundColor: "#F9620A67" }}>
                <Card.Img
                  className="mx-auto d-block"
                  variant="top"
                  as={BiSync}
                  style={{
                    margin: "1%",
                    width: "10%",
                    height: "10%",
                    textAlign: "center",
                  }}
                />
                <Card.Body>
                  <Card.Title
                    style={{
                      textAlign: "center",
                      fontFamily: "Cinzel",
                      fontWeight: "900",
                    }}
                  >
                    ALWAYS IN SYNC
                  </Card.Title>
                  <Card.Text style={{ textAlign: "center" }}>
                    PortfolioPilot will take care of synchronizing data so you
                    can focus on investing.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card style={{ backgroundColor: "#F9620A67" }}>
                <Card.Img
                  className="mx-auto d-block"
                  variant="top"
                  as={AiOutlineToTop}
                  style={{
                    margin: "1%",
                    width: "10%",
                    height: "10%",
                    textAlign: "center",
                  }}
                />
                <Card.Body>
                  <Card.Title
                    style={{
                      textAlign: "center",
                      fontFamily: "Cinzel",
                      fontWeight: "900",
                    }}
                  >
                    STAY ON TOP OF EVERYTHING
                  </Card.Title>
                  <Card.Text style={{ textAlign: "center" }}>
                    Keep track of your investments at anytime with
                    PortfolioPilot
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card
                style={{ backgroundColor: "#F9620A67", marginBottom: "6%" }}
              >
                <Card.Img
                  className="mx-auto d-block"
                  variant="top"
                  as={BiSupport}
                  style={{
                    margin: "1%",
                    width: "10%",
                    height: "10%",
                    textAlign: "center",
                  }}
                />
                <Card.Body>
                  <Card.Title
                    style={{
                      textAlign: "center",
                      fontFamily: "Cinzel",
                      fontWeight: "900",
                    }}
                  >
                    INSTANT CUSTOMER SUPPORT
                  </Card.Title>
                  <Card.Text style={{ textAlign: "center" }}>
                    Having issues? Get them resolved within minutes by our
                    support team available 24x7.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <Footer />
    </>
  );

}
export default Home;


