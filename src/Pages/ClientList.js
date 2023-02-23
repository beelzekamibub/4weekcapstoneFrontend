import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { Sidenav } from '../Components/sidenav';
import { useEffect, useState } from 'react';
import "../styles/clientlist.css";
import { MDBIcon } from 'mdb-react-ui-kit';

export const ClientList = () => {


  const [firstname, setfirstName] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [company, setcompany] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [address, setaddress] = useState("");
  const [adbisorId, setadbisorId] = useState("");

  localStorage.setItem("advid",adbisorId);


  const [clientsList, setClientsList] = useState([]);

  const signout = () => {
    localStorage.setItem("JWT-Token", "");
    window.location = '/';
  }

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
    let ntoken = "Bearer " + token.replaceAll('"', '');

    try {
      console.log("made a get call");
      fetch("https://localhost:7061/api/User/Get-All-Clients-for-an-advisor", {
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
          setClientsList(data);

        })
    } catch (error) {
      console.log("Error-> ", error);
    }


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

  }, [])

  const cli = clientsList.map((e, ind) => {
    return (
      <tr>
        <td>{e.clientID}</td>
        <td>{e.firstName}</td>
        <td>{e.lastName}</td>
        <td>{e.email}</td>
        <td>{e.phone}</td>
      </tr>
    )
  })



  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      <Sidenav />
      <div style={{ flex: 1, padding: '20px', overflowY: 'scroll' }}>
        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "2px", marginBottom: "6px", cursor: "pointer" }}>
          <span class="signout" style={{ marginRight: "2%", fontWeight: "700", backgroundColor: "#212529", color: "white", padding: "1%", borderRadius: "14px" }}>
            <center>
              <span style={{ marginRight: "10%" }} onClick={signout}>Sign Out</span>
              <MDBIcon style={{ marginLeft: "1%" }} icon="power-off" size="1.5x" onClick={signout} />
            </center>
          </span>
        </div>
        <div style={{ border: "3px solid black", width: "fit-content", padding: "2%", borderRadius: "20px" }}>
          <h3>Welcome, {`${firstname} ${lastname}`}</h3>
          <p style={{ color: "#f58142" }}>It's good to see you again</p>
        </div>
        <center>
          <h3 style={{ fontWeight: "700", marginBottom: "3%" }}>Client Details</h3>
        </center>


        <Table className="rounded-table" striped bordered hover >
          <thead>
            <tr>
              <th>Client ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {cli}
          </tbody>
        </Table>
        <Button className="addnewclient" href="/addclient" style={{ fontFamily: "Arial", borderRadius: "14px", backgroundColor: "#333333" }}>Add New Client</Button>
      </div>
    </div>
  );
};
