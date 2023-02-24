import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { Sidenav } from '../Components/sidenav';
import { useEffect, useState } from 'react';
import "../styles/clientlist.css";
import { MDBIcon } from 'mdb-react-ui-kit';
import { Navbar2 } from '../Components/navbar2';

export const ClientList = () => {
  const [clientsList, setClientsList] = useState([]);
  const [firstname,setfirstName]=useState("");
  const [lastname,setlastname]=useState("");
  const [email,setemail]=useState("");
  const [phone,setphone]=useState("");
  const [company,setcompany]=useState("");
  const [city,setcity]=useState("");
  const [state,setstate]=useState("");
  const [address,setaddress]=useState("");
  const [adbisorId,setadbisorId]=useState("");

  useEffect(() => {
    let token = localStorage.getItem("JWT-Token");
    if(token==""){
      alert("not authorized");
      window.location = '/loginadv'
    }
    token = "Bearer " + token.replaceAll('"', '');

    try {
      console.log("made a get call");
      fetch("https://localhost:7061/api/User/Advisor-Info", {
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

    try {
      console.log("made a get call");
      fetch("https://localhost:7061/api/User/Get-All-Clients-for-an-advisor", {
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
          setClientsList(data);

        })
    } catch (error) {
      console.log("Error-> ", error);
    }
  }, [])

  const cli = clientsList.map((e,ind) =>{
    return (
      <tr key={ind}>
        <td>
        <label>{e.clientID}</label>
        </td>
        <td>
        <Button href={"/clientDetails/" + e.clientID}  className="btnClientName" variant="link" >{e.firstName} {e.lastName}</Button>
        </td>
        <td>{e.email}</td>
        <td>{e.phone}</td>
        <td>10000</td>
      </tr>
    )
  })



  return (
    <>
      <Navbar2 />
      <div className='container' style={{ marginTop: "7%" }} >


      <div style={{border:"3px solid black",width:"fit-content",padding:"2%",borderRadius:"20px"}}>
      <h3>Welcome {firstname} {lastname}</h3>
      <p style={{color:"#212529"}}>It's good to see you again</p>
      </div>
      <br/>
        <Table style={{ marginBottom: "3%" }} className="rounded-table" responsive hover id="table" >
          <thead>
            <tr>
              <th>Client ID</th>
              <th>Name</th>
              <th>E-mail</th>
              <th>Phone No.</th>
              <th>Total Investment</th>
            </tr>
          </thead>
          <tbody>
            {cli}
          </tbody>
        </Table>
        <Button href='/addclient' 
        className="addnewclient" 
        style={{ fontFamily: "Arial", borderRadius: "14px", backgroundColor: "#333333" }}>
          Add New Client
        </Button>
      </div>
    </>
  );
};
