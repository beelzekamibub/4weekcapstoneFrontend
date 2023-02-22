import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { Roww } from "./row";
import { apiRequest } from "./apiRequest";
import "../styles/editClientDetails.css";
import { Sidenav } from "../Components/sidenav";


export const EditClientDetails = () => {
  const params = useParams();
  const API_AdviserClientList = "http://localhost:8020/AdviserClientList";
  const [items, setItems] = useState([]);
  const [client, setClient] = useState([]);

  useEffect(() => {
    const fetchAdviserClientList = async () => {
      try {
        const response = await fetch(API_AdviserClientList);
        const tempList = await response.json();
        setItems(tempList);
        const tempList1 = tempList.filter((it) => it.id == params.id);
        setClient(tempList1);
      } catch (err) {
        console.log(err);
      }
    };
    (async () => await fetchAdviserClientList())();
    // (async () => await func())();
  }, []);
  const handleDelete = async (item) => {
    console.log("33");
    const listItems = items.filter((it) => it.id !== item.id);
    console.log(listItems);
    setItems(listItems);
    const deleteOptions = { method: "DELETE" };
    const reqUrl = `${API_AdviserClientList}/${item.id}`;
    const result = await apiRequest(reqUrl, deleteOptions);
    window.location.reload(false)
  };

  return (
    
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      <Sidenav />
      <div style={{ flex: 1, padding: '20px', overflowY: 'scroll' }}>
      {client.length ? (
        <div className="everything">
          <h3>Edit client Details</h3>
          {client.map((client1) => (
            <div className="tbl" key={client1.id}>
              <Table>
                <tbody>
                  <tr>
                    <td>Name</td>

                    <td>
                      <Roww
                        placeholder={client1.clientName}
                        items={items}
                        setItems={setItems}
                        id={client1.id}
                        API_AdviserClientList={API_AdviserClientList}
                        place="1"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>E-mail</td>

                    <td>
                      <Roww
                        placeholder={client1.mail}
                        items={items}
                        setItems={setItems}
                        id={client1.id}
                        API_AdviserClientList={API_AdviserClientList}
                        place="2"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Phone Number</td>

                    <td>
                      <Roww
                        placeholder={client1.phoneNo}
                        items={items}
                        setItems={setItems}
                        id={client1.id}
                        API_AdviserClientList={API_AdviserClientList}
                        place="3"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Location</td>

                    <td>
                      <Roww
                        placeholder="xyz"
                        items={items}
                        setItems={setItems}
                        id={client1.id}
                        API_AdviserClientList={API_AdviserClientList}
                        place="4"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Button onClick={() => handleDelete(client1)}>
                        Delete client
                      </Button>
                    </td>
                    
                  </tr>
                </tbody>
              </Table>
            </div>
          ))}
        </div>
      ) : (<p style={{ marginTop: "2rem" }}>Client do not exist</p>)}
      </div>
    </div>
  );
};