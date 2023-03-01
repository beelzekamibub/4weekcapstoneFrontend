import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import navlogo from '../Images/navlogo.png';
import logosmall from '../Images/logosmall.png';
import { useEffect, useState } from "react";

function Navbar2() {
  const [firstname, setfirstName] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [company, setcompany] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [address, setaddress] = useState("");
  const [adbisorId, setadbisorId] = useState("");
  const [showBasic, setShowBasic] = useState(false);
  useEffect(() => {

    let token = localStorage.getItem("JWT-Token");

    if (token == "") {
      alert("not authorized");
      window.location = '/loginadv'
    }
    token = "Bearer " + token.replaceAll('"', '');

    try {
      console.log("made a get call");
      fetch("https://localhost:7061/api/User/AdvisorInfo", {
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


  })
  const signout = () => {

    localStorage.setItem("JWT-Token", "");
    window.location = '/';
  }

  return (
    <MDBNavbar expand='lg' light bgColor='dark'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='/'>
          <img style={{ height: "40px", marginLeft: "" }}
            src={navlogo} />
        </MDBNavbarBrand>

        <MDBNavbarToggler className='text-white'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem >
              <MDBNavbarLink active aria-current='page' className='text-white' href='/clientlist'>
                Clients
              </MDBNavbarLink>
            </MDBNavbarItem>


          </MDBNavbarNav>


        </MDBCollapse>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink className='text-white' active aria-current='page' href='/profileadv'>
                {lastname}, {firstname}
              </MDBNavbarLink>
            </MDBNavbarItem>
            <div onClick={signout}>
              <MDBNavbarItem>
                <MDBNavbarLink className='text-white' href='/'><MDBIcon style={{ marginLeft: "1%" }} icon="power-off" size="1.5x" /></MDBNavbarLink>
              </MDBNavbarItem>
            </div>
          </MDBNavbarNav>
        </MDBCollapse>

      </MDBContainer>
    </MDBNavbar>
  );
}

export default Navbar2

