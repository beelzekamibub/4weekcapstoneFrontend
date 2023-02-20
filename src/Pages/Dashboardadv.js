import { Footer } from "../Components/footer";
// import { clientlist } from "./ClientList";
import { ClientList } from "./ClientList";
import { useEffect, useState } from "react";
import "../styles/Dashboardadv.css";
import { Sidenav } from "../Components/sidenav";
//get arushis code from github

export function Dashboardadv() {
  // const API_AdviserClientList = "http://localhost:8020/AdviserClientList";
  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   const fetchAdviserClientList = async () => {
  //     try {
  //       const response = await fetch(API_AdviserClientList);
  //       const tempList = await response.json();
  //       setItems(tempList);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   (async () => await fetchAdviserClientList())();
  // }, []);

  // const handleDelete = async (item) => {
  //   const listItems = items.filter((it) => it.id !== item.id);
  //   setItems(listItems);
  //   const deleteOptions = { method: "DELETE"};
  //   const reqUrl = `${API_AdviserClientList}/${item.id}`;
  //   const result = await apiRequest(reqUrl, deleteOptions);
    
  // };

  return (
    <div className="App">
      <Sidenav/>
      <ClientList/>
      <Footer />
      </div>
      ); }