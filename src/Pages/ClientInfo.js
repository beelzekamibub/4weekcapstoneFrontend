import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { Sidenav } from "../Components/sidenav";
import "../styles/clientinfo.css";
import { MDBIcon } from 'mdb-react-ui-kit';

export const ClientInfo = ({ clientlist }) => {  
  return (
    <div style={{display: 'flex', height: '100vh', overflow: 'hidden' }}>
    
      <Sidenav />

      <div id = "wholeBody" style={{  flex: 1,paddingRight:"2%",paddingLeft:"2%", overflowY: 'scroll'  }}>
      <div style={{display:"flex",justifyContent:"flex-end",marginTop:"2px",marginBottom:"6px",cursor:"pointer"}}>
      <span class="signout" style={{marginRight:"2%",fontWeight:"700",backgroundColor:"#212529",color:"white",padding:"1%",borderRadius:"14px"}}>
      <center>
      <span  style={{marginRight:"10%"}}>Sign Out</span>
      <MDBIcon style={{marginLeft:"1%"}}icon="power-off" size="1.5x"/>
      </center>
    
      </span>
        
      </div>
      <div style={{border:"3px solid black",width:"fit-content",padding:"2%",borderRadius:"20px"}}>
      <h3>Welcome, AdviserName</h3>
      <p style={{color:"#f58142"}}>It's good to see you again</p>
      </div>
      
      <p id="clientInfoPara"><center style={{fontSize:"140%",fontWeight:"700"}}>List of Clients</center></p>
      
      
      <Table className="rounded-table" responsive hover id="table" >
        <thead>
          <tr>
            <th>Client ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>E-mail</th>
            <th>Phone No.</th>
            <th>Total Investment</th>
            
          </tr>
        </thead>
        <tbody>
          {clientlist}
          
        </tbody>
      </Table>
      
    </div>
    </div>
  );
};