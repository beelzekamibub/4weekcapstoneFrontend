import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { Sidenav } from "../Components/sidenav";


export const ClientInfo = ({ clientlist }) => {




  
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidenav />
      <div id = "wholeBody" style={{ flex: 1, padding: '20px' }}>
      <h3>Welcome, AdviserName</h3>
      <p >It's good to see you again</p>
      <p id="clientInfoPara">List of Clients</p>
      
      
      <Table responsive hover id="table" >
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