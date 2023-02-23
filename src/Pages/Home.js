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
            {/* <MDBCol>
              <Form style={{borderRadius:"20px"}}className="signInForm" id="signInForm">
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
                  <Form.Label style={{fontWeight:"700",fontSize:"110%"}}>Email</Form.Label>
                  <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label style={{fontWeight:"700",fontSize:"110%"}}>Password</Form.Label>
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
            </MDBCol> */}
            <MDBCol>
              <Form style={{borderRadius:"20px",boxShadow:"6px 6px 4px rgba(0, 0, 0, 0.2)"}}className="signInForm" id="signInForm">
                <center>
                  <img
                  
                    className="logo"
                    src={require("../Images/investt.png")}
                    alt="logo"
                  />
                </center>
                {/* <h3 className="signInHeader">Advisor's SignIn</h3>
                <p className="signInText">
                  Admin access via <b>Advisor</b> Account
                </p> */}
                <p style={{color:"grey",fontSize:"100%",marginLeft:"3%",marginRight:"3%"}}>
                With our Portfolio Management System, managing your investments has never been easier. From analyzing performance to rebalancing your portfolio, our system takes care of everything, so you can sit back and watch your investments grow.
                </p>
                
                
                <center>
                <Button style={{marginTop:"2%",fontFamily:"Arial",borderRadius:"14px",marginBottom:"4%",width:"50%"}} href='/SignUpp' variant="primary" type="submit">
                   Get started!
                </Button>

                </center>

            
                {/* <Button onClick={ForgotPassword}
                  variant="link"
                  size="sm"
                  id="abc"
                  href="/forgetPassword"
                >
                  Forgot Password?
                </Button> */}
                {/* <div>
                  <p className="clickHereClass">Don't have an account?</p>
                  <Button variant="link" size="sm" className="clickHereclass" id="clickHereId" href="/SignUp"> Sign Up </Button>
                </div> */}
              </Form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        
      </div>

      <Footer />
    </>
  );

}
export default Home;

