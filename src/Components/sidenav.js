import React from 'react';
import "../styles/sidenav.css";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import logosmall from '../Images/logosmall.png';

export const Sidenav = () => {
  const mystyle = {
    height:"40px",
    marginRight:"20px",
  };

  const signout = () => {
    localStorage.setItem("JWT-Token", "");
    window.location = '/';
  }

  return (
    <div style={{ position: 'sticky', top: '0' }}>
    <CDBSidebar textColor="#fff" backgroundColor="#333" position="fix">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
        <a href="/dashboardadv" className="text-decoration-none" style={{ color: 'inherit' }}>
          <img style={mystyle}
            src={logosmall}/>
          </a>
          <span style={{fontSize:"90%"}}>PortfolioPilot</span>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
          <NavLink exact to="/profileadv" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Profile</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/clientlist" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Client List</CDBSidebarMenuItem>
            </NavLink>
            {/* <NavLink exact to="/addclient" activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="plus">Add New Client</CDBSidebarMenuItem>
            </NavLink> */}
            
          </CDBSidebarMenu>
        </CDBSidebarContent>
        {/* <CDBSidebarFooter style={{ textAlign: "center" }}>
        <button onClick={signout} style={{ textAlign: "center", backgroundColor:"#ff381a"}}> 
          <CDBSidebarMenuItem icon="power-off"></CDBSidebarMenuItem>
        </button>
        </CDBSidebarFooter> */}
      </CDBSidebar>
    </div>
  );
};
