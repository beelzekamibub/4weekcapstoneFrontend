import React from 'react';
import { Table } from 'react-bootstrap';
import { Sidenav } from '../Components/sidenav';
import { useEffect,useState } from 'react';


export const ClientList = () => {
  const [clientsList, setClientsList] = useState([]);
  var ntokenn = "";
  useEffect(() => {

    let token = localStorage.getItem("JWT-Token");
    let ntoken = "Bearer " + token.replaceAll('"', '');
    ntokenn = ntoken;

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
  },[])

  const cli = clientsList.map((e,ind) =>{
    return (
      <tr>
        <td>{e.clientID}</td>
        <td>{e.firstName}</td>
        <td>{e.lastName}</td>
        <td>{e.email}</td>
      </tr>
    )
  })



  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidenav />
      <div style={{ flex: 1, padding: '20px' }}>
        <h3>Client List</h3>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>CLient ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {cli}
          </tbody>
        </Table>
      </div>
    </div>
  );
};
