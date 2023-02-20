import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";


export const ClientInfo = ({ items, handleDelete }) => {
  return (
    <div id="wholeBody">
      <h3>Welcome, AdviserName</h3>
      <p >It's good to see you again</p>
      <p id="clientInfoPara">List of Clients</p>
      
      
      <Table responsive hover id="table" >
        <thead>
          <tr>
            <th>Client ID</th>
            <th>Client Name</th>
            <th>E-mail</th>
            <th>Phone No.</th>
            <th>New Investment</th> 
            <th>Total Investment</th>
            
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>
                <label>{item.id}</label>
              </td>
              <td>
                <Button href={"/clientDetails/" + item.id} className="btnClientName" variant="link" >{item.clientName}</Button>
                
              </td>
              <td>
                <label>{item.mail}</label>
              </td>
              <td>
                <label>{item.phoneNo}</label>
              </td>
              <td>
                <label>{item.newInves}</label>
              </td>
              <td>
                <label>{item.newInves}</label>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      
    </div>
  );
};