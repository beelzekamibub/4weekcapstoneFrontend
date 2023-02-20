import React from "react";
import { Sidenav } from "../Components/sidenav";

export const AddClient = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidenav />
      <div style={{ flex: 1, padding: "20px" }}>
        <h3>Add New Client</h3>
      </div>
    </div>
  );
};
