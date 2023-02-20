import { Navbarr } from "../Components/navbar";
import { Footer } from "../Components/footer";
import { Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "../styles/clientDetails.css";

export const ClientDetails = () => {
  return (
    <div>
      <Navbarr />
      <div style={{ marginTop: "70px" }}>
        <h1 className="clientname">Client Personal Details</h1>
        <div
          style={{
            border: "1px solid black",
            margin: "1%",
            backgroundColor: "lightgrey",
          }}
        >
          <h2 className="detailsclient">Name of Client</h2>
          <h5 className="detailsclient">Client ID</h5>
          <h5 className="detailsclient">Email/Phone Number</h5>
          <h5 className="detailsclient">Total Investment</h5>
        <Button style={{ margin: "2%" }} variant="primary">
            Edit profile
        </Button>
        </div>

        <h1 className="clientname">Client Investment Details</h1>
        <Table
            striped
            bordered
            hover
            responsive
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
      <Footer />
    </div>
  );
};
