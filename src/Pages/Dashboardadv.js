import Button from 'react-bootstrap/Button'
import { ClientList } from "./ClientList";
import { useEffect, useState } from "react";
import "../styles/Dashboardadv.css";


export function Dashboardadv() {
  const [clientsList, setClientsList] = useState([]);
  var ntokenn = "";
  useEffect(() => {
    // setClientsList([]);
    // let token = localStorage.getItem("JWT-Token");
    // if(token==""){
    //   alert("not authorized");
    // }
    // let ntoken = "Bearer " + token.replaceAll('"', '');
    // ntokenn = ntoken;

    // try {
    //   console.log("made a get call");
    //   fetch("https://localhost:7061/api/User/Get-All-Clients-for-an-advisor", {
    //     method: "GET",
    //     headers: {
    //       'Content-type': 'application/json',
    //       "Access-Control-Allow-Origin": "*",
    //       "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE",
    //       "Authorization": ntoken,
    //       "Access-Control-Max-Age": 86400
    //     }
    //   })
    //     .then(res => res.json())
    //     .then((data) => {
    //       setClientsList(data);

    //     })
    // } catch (error) {
    //   console.log("Error-> ", error);
    // }
  },[])

  const cli = clientsList.map((e,ind) =>{
    return (
      <tr key={ind}>
        <td>
        <label>{e.clientID}</label>
        </td>
        <td>
        <Button href={"/clientDetails/" + e.userId}  className="btnClientName" variant="link" >{e.firstName}</Button>
        </td>
        <td>
        <Button href={"/clientDetails/"+ e.userId} className="btnClientName" variant="link" >{e.lastName}</Button>
        </td>
        <td>{e.email}</td>
        <td>{e.phone}</td>
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
      
      <ClientList clientlist={cli}/>
 
      
      </div>
      ); }