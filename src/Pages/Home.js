import React from "react";
import { Footer } from "../Components/footer";
import Navbarr from "../Components/navbar";
import MyTypewriterComponentt from "../Components/MyTypewriterComponent.js";
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";
import "../styles/Home.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Home() {
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
              <Form style={{ borderRadius: "20px", boxShadow: "6px 6px 4px rgba(0, 0, 0, 0.2)" }} className="signInForm" id="signInForm">
                <center>
                  <img
                    className="logo"
                    src={require("../Images/investt.png")}
                    alt="logo"
                  />
                </center>
                <p style={{ color: "grey", fontSize: "100%", marginLeft: "3%", marginRight: "3%" }}>
                  With our Portfolio Management System, managing your investments has never been easier. From analyzing performance to rebalancing your portfolio, our system takes care of everything, so you can sit back and watch your investments grow.
                </p>
                <center>
                  <Button style={{ marginTop: "2%", fontFamily: "Arial", borderRadius: "14px", marginBottom: "4%", width: "50%" }} href='/SignUpp' variant="primary" type="submit">
                    Get started!
                  </Button>
                </center>
              </Form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="mt-4">
      <Footer  />
      </div>
      
    </>
  );

}
export default Home;


