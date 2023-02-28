import { Button, Table } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import "../styles/clientDetails.css";
import { useState, useEffect } from "react";
import React from "react";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import picprofile from "../Images/picprofile.png"
import "../styles/advprofile.css";
import Navbar2 from "../Components/navbar2";
import DeleteIcon from '@mui/icons-material/Delete';

export const ClientDetails = () => {
  let { EcliID } = useParams();
  const [Total, setTotal] = useState(0.0);
  const [firstname, setfirstName] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [company, setcompany] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [address, setaddress] = useState("");
  const [adbisorId, setadbisorId] = useState("");
  const [listofinvestment, setlistofinvestment] = useState([]);
  const [cont, setCont] = useState(false);
  const [renderlist, setrenderlist] = useState(false);




  const func = () => {
    if (cont === false) {
      setCont(true)
    };
  }

  const funcSave = () => {
    setCont(false)
  }





  const deleteinvestment = (id) => {
    let token = localStorage.getItem("JWT-Token");
    if (token == "") {
      alert("not authorized");
      window.location = '/loginadv'
    }
    token = "Bearer " + token.replaceAll('"', '');

    try {

      fetch(`https://localhost:7061/api/Investment/delete?request=${id}`, {
        method: "DELETE",
        headers: {
          'Content-type': 'application/json',
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE",
          "Authorization": token,
          "Access-Control-Max-Age": 86400
        }
      })
        .then(res => res.text())
        .then((data) => {
          alert("Success");
          window.location.reload();
        })
    } catch (error) {
      console.log("Error-> ", error);
    }
  }


  useEffect(() => {
    let token = localStorage.getItem("JWT-Token");
    if (token == "") {
      alert("not authorized");
      window.location = '/loginadv'
    }
    token = "Bearer " + token.replaceAll('"', '');

    try {
      fetch(`https://localhost:7061/api/User/client-Info?id=${EcliID}`, {
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
  }, [])

  useEffect(() => {
    let token = localStorage.getItem("JWT-Token");
    if (token == "") {
      alert("not authorized");
      window.location = '/loginadv'
    }
    token = "Bearer " + token.replaceAll('"', '');
    try {
      fetch(`https://localhost:7061/api/Investment/GetTotalInvestment?clientID=${EcliID}`, {
        method: "GET",
        headers: {
          'Content-type': 'application/json',
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE",
          "Authorization": token,
          "Access-Control-Max-Age": 86400
        }
      })
        .then(res => res.text())
        .then((data) => {
          setTotal(data);
        })
    } catch (error) {
      console.log("Error-> ", error);
    }
  }, [firstname])

  useEffect(() => {
    let token = localStorage.getItem("JWT-Token");
    if (token == "") {
      alert("not authorized");
      window.location = '/loginadv'
    }
    token = "Bearer " + token.replaceAll('"', '');
    try {
      console.log("made a get call");
      fetch(`https://localhost:7061/api/Investment/GetInvestmentInformation?clientid=${EcliID}`, {
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
          console.log(data);
          setlistofinvestment(data);
          if (Object.keys(data).length > 0)
            setrenderlist(true);
        })
    } catch (error) {
      console.log("Error-> ", error);
    }
  }, [Total])



  const cli = listofinvestment.map((e, ind) => {
    return (
      <tr key={ind}>
        <td style={{ alignItems: "left" }}>
          <label>{e.investmentName}</label>
        </td>
        <td style={{ alignItems: "left" }}>
          <Button href={"/clientDetails/" + EcliID} className="btnClientName" variant="link" >{e.investmentTypeName}</Button>
        </td>
        <td style={{ alignItems: "left" }}>{e.active}</td>
        <td style={{ alignItems: "left" }}>{e.strategyName}</td>
        <td style={{ alignItems: "left" }}>{e.accountID}</td>
        <td style={{ alignItems: "left" }}>{e.modelAPLID}</td>
        <td style={{ alignItems: "left" }}>{e.investmentAmount}</td>
        <td style={{ alignItems: "left" }}><DeleteIcon onClick={() => deleteinvestment(e.strategyid)}></DeleteIcon></td>
      </tr>
    )
  })

  return (
    <>
      <Navbar2 />
      <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "2px", marginBottom: "6px", cursor: "pointer" }}>
        <span className="signout" style={{ marginRight: "2%", fontWeight: "700", backgroundColor: "#212529", color: "white", padding: "1%", borderRadius: "14px" }}>
          <center>
            <span style={{ marginRight: "10%" }}>Sign Out</span>
            <MDBIcon style={{ marginLeft: "1%" }} icon="power-off" size="1.5x" />
          </center>
        </span>
      </div>
      <section className='100vh' >
        <MDBContainer className="py-5 h-100"  >
          <MDBRow className="justify-content-center align-items-center h-100" >
            <MDBCol lg="10" className="mb-4 mb-lg-0" style={{ border: "none" }}>
              <MDBCard className="mb-3" style={{ borderRadius: '40px' }}>
                <MDBRow className="g-0">
                  <MDBCol md="4" className="gradient-custom text-center text-black"
                  >
                    <div style={{ marginTop: "20%" }}><MDBCardImage src={picprofile}
                      alt="Avatar" style={{ width: '50%', backgroundColor: "#F58142" }} fluid />
                      <MDBTypography tag="h5">{firstname} {lastname}</MDBTypography>
                      <MDBCardText ><h2 style={{ marginBottom: "15%" }} >Client</h2></MDBCardText></div>
                  </MDBCol>
                  <MDBCol md="8" >
                    <MDBCardBody className="p-4">
                      <div className="hstack gap-3">
                        <div className="vstack gap-6">
                          <MDBTypography tag="h6"><h3>Client Id</h3> </MDBTypography>
                          <MDBCardText className="text-muted">{adbisorId}</MDBCardText>
                        </div>
                        <div className="vstack gap-6">
                          <MDBTypography tag="h6"><h3>Total Investment</h3> </MDBTypography>
                          <MDBCardText className="text-muted"><h5>${Total}</h5> </MDBCardText>
                        </div>
                      </div>
                      <hr className="mt-0 mb-4" />
                      <MDBRow className="pt-1">
                        <MDBCol size="6" className="mb-3" style={{ backgroundColor: "#ffffff" }}>
                          <MDBTypography tag="h6">Email</MDBTypography>
                          <MDBCardText className="text-muted">{email}</MDBCardText>
                        </MDBCol>
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Phone</MDBTypography>
                          <MDBCardText className="text-muted">{phone}</MDBCardText>
                        </MDBCol>
                      </MDBRow>
                      <MDBRow className="pt-1">
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Company</MDBTypography>
                          <MDBCardText className="text-muted">{company}</MDBCardText>
                        </MDBCol>
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Address</MDBTypography>
                          <MDBCardText className="text-muted">{address}</MDBCardText>
                        </MDBCol>
                      </MDBRow>
                      <MDBRow className="pt-1">
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">City</MDBTypography>
                          <MDBCardText className="text-muted">{city}</MDBCardText>
                        </MDBCol>
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">State</MDBTypography>
                          <MDBCardText className="text-muted">{state}</MDBCardText>
                        </MDBCol>
                      </MDBRow>
                    </MDBCardBody>
                  </MDBCol>
                </MDBRow>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <h1 className="clientname">Client Investment Details</h1>
      <Table
        className="rounded-table"
        hover
        responsive
        id="table"
        style={{ margin: "2%", width: "92%", textAlign: "center" }}
      >
        <thead>
          <tr>
            <th>Investment Name</th>
            <th>Investment Type</th>
            <th>Active Status</th>
            <th>Investment Strategy</th>
            <th>Account ID</th>
            <th>Model APL ID</th>
            <th>Amount Invested</th>
            <th>Delete Investment</th>
          </tr>
        </thead>
        <tbody>

          {renderlist ? (cli) : (<tr></tr>)}
        </tbody>
      </Table>

      <Button onClick={func} id="btnAddInves"
        style={{
          fontFamily: "Arial",
          borderRadius: "14px",
          width: "fit-content",
          borderTop: "0px",

        }}
      >
        Add Investment
      </Button>
      {cont &&
        <div className="contAddTrans">
          <Form className="formAddTrans">
            <Row>
              <Form.Group as={Col} sm className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Enter investment name" />
              </Form.Group>

              <Form.Group as={Col} sm style={{ paddingBottom: "15px" }}>
                <Form.Select aria-label="Default select example">
                  <option>Investment Type</option>
                  <option value="1">Type-1</option>
                  <option value="2">Type-2</option>
                  <option value="3">Type-3</option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} sm className="mb-3">
                <Form.Control type="text" placeholder="Strategy Name" />
              </Form.Group>
              <Form.Group as={Col} sm className="mb-3">
                <Form.Control type="text" placeholder="Account ID" />
              </Form.Group>


            </Row>
            <Row>
              <Form.Group as={Col} sm className="mb-3">
                <Form.Control type="text" placeholder="Modle APLID" />
              </Form.Group>
              <Form.Group as={Col} sm className="mb-3">
                <Form.Control type="number" placeholder="Investment Amount" />
              </Form.Group>
              <Form.Group as={Col} sm className="mb-3">
                <Form.Select aria-label="Default select example">
                  <option>active</option>
                  <option value="1">0</option>
                  <option value="2">1</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Button id="btnSave" onClick={funcSave}>Save</Button>
          </Form>
        </div>}
    </>
  );
};
