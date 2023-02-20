import Button from 'react-bootstrap/Button'
import { Sidenav } from '../Components/sidenav'
import { Navbarr } from "../Components/navbar";
import { Footer } from "../Components/footer";
import { ClientInfo } from "./ClientInfo";
import { useEffect, useState } from "react";
import "../styles/Dashboardadv.css";
import { apiRequest } from "./apiRequest";


export function Dashboardadv() {
  const [clientsList, setClientsList] = useState([]);
  var ntokenn = "";
  useEffect(() => {
    setClientsList([]);
    let token = localStorage.getItem("JWT-Token");
    if(token==""){
      alert("not authorized");
    }
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
      <tr key={ind}>
        <td>{e.clientID}</td>
        <td>{e.firstName}</td>
        <td>{e.lastName}</td>
        <td>{e.email}</td>
      </tr>
    )
  })

  // const handleDelete = async (item) => {
  //   const listItems = items.filter((it) => it.id !== item.id);
  //   setItems(listItems);
  //   const deleteOptions = { method: "DELETE"};
  //   const reqUrl = `${API_AdviserClientList}/${item.id}`;
  //   const result = await apiRequest(reqUrl, deleteOptions);
    
  // };

  return (
    <div className="App">
      
      <ClientInfo clientlist={cli}/>
      {/* <ClientInfo></ClientInfo> */}
      
      </div>
      ); }