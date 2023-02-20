import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";

export const Sidenav = () => {

  const signout = () => {
    localStorage.setItem("tokena", "");
    window.location = '/';
  }

  return (
    <div
      style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            Home
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/clientlist" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Client List</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/addclient" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="plus">
                Add New Client
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/profileadv" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Profile</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <button onClick={signout} style={{ padding: "20px 5px" }}>Sign Out</button>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};
