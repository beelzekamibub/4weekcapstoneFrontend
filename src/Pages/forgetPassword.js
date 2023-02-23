import React from "react";
import { Footer } from "../Components/footer";
import { Navbarr } from "../Components/navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../styles/forgetPassword.css";

export const ForgetPassword = () => {

    return (
      <>
      
        <Navbarr />
        <div className="forgetPassword">
          
        
        <Form style={{borderRadius:"20px",boxShadow:"6px 6px 4px rgba(0, 0, 0, 0.2)"}} className="forgetPasswordForm" id="forgetPasswordForm">
           
          <h3 className="forgetPasswordHeader">Forgot Password</h3>
          <center> <p>
          Enter email to which reset link will be sent
              </p></center>
         
          <Form.Group className="mb-3" controlId="formBasicEmail">
          
            <Form.Control type="text" placeholder="Email" />
          </Form.Group>
<center><Button style={{fontFamily:"Arial",borderRadius:"14px",width:"50%",borderTop:"0px"}} variant="primary" type="submit">
            Send me the link
          </Button></center>
          

        </Form>
        </div>
        <Footer />
      </>
    );
  
}
