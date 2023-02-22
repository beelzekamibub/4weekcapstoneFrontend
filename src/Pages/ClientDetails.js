import { Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";
import { Sidenav } from "../Components/sidenav";
import "../styles/clientDetails.css";
import { useState,useEffect } from "react";

export const ClientDetails = () => {
  const { userID } = useParams();
  //alert(userID);
  const [Details, setDetails] = useState([]);
  const [liist, setlist] = useState([]);
  useEffect(() => {
    let token = "Bearer " + localStorage.getItem("JWT-Token").replaceAll('"', '');
    if(token=="Bearer "){
      alert("not authorized");
    }
    
    try {
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
          setlist(data);
        })
    } catch (error) {
      console.log("Error-> ", error);
    }
    console.log(liist);
    setDetails(liist.filter((e,i)=>{return e[i].userId==userID}));
    console.log(Details);
  },[])

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
       <Sidenav />
      <div style={{ flex: 1, padding: '20px', overflowY: 'scroll' }}>
        <h1 className="clientname">Client Personal Details</h1>
        <div
          className="personalDetails"
          style={{ border: "1px solid black", margin: "1%" }}
        >
          {/* <h5 className="detailsclient">First Name       :          {clientDetails[0].firstName} </h5>
          <h5 className="detailsclient">Last Name        :          {clientDetails[0].lastName}</h5>
          <h5 className="detailsclient">Client ID        :          {clientDetails[0].clientID}</h5>
          <h5 className="detailsclient">Email            :          {clientDetails[0].email}</h5>
          <h5 className="detailsclient">Phone No.        :          {clientDetails[0].phone}</h5>
          <h5 className="detailsclient">Company          :          {clientDetails[0].company}</h5>
          <h5 className="detailsclient">Address          :          {clientDetails[0].address}</h5>
          <h5 className="detailsclient">City             :          {clientDetails[0].city}</h5>
          <h5 className="detailsclient">State            :          {clientDetails[0].state}</h5>
          <h5 className="detailsclient">Total Investment : </h5> */}
          <Button id="btnEdit" style={{ margin: "2%" }} variant="primary">
            Edit profile
          </Button>
        </div>

        <h1 className="clientname">Client Investment Details</h1>
        <Table
          hover
          responsive
          id="table"
          style={{ margin: "2%", width: "92%", textAlign: "center" }}
        >
          <thead>
            <tr>
              <th>Investment ID</th>
              <th>Investment Type</th>
              <th>Investment Strategy</th>
              <th>Amount Invested</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>--</td>
              <td>--</td>
              <td>--</td>
            </tr>
            <tr>
              <td>2</td>
              <td>--</td>
              <td>--</td>
              <td>--</td>
            </tr>
            <tr>
              <td>3</td>
              <td>--</td>
              <td>--</td>
              <td>--</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};
