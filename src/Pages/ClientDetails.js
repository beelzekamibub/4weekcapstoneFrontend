import {Table} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Sidenav } from "../Components/sidenav";
import "../styles/clientDetails.css";


export const ClientDetails = (id) => {
  
    
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
        <Sidenav />
        <div style={{flex: 1, padding: '20px' }}>
          <h1 className="clientname">Client Personal Details</h1>
          <div className="personalDetails" style={{border:"1px solid black",margin:"1%"}}>
          <h2 className="detailsclient">Name of Client</h2>
          <h5 className="detailsclient">Client ID : </h5>
          <h5 className="detailsclient">Email : </h5>
          <h5 className="detailsclient">Phone No. :  </h5>
          <h5 className="detailsclient">Company : </h5>
          <h5 className="detailsclient">Address : </h5>
          <h5 className="detailsclient">Total Investment : </h5>
          <Button id="btnEdit" style={{margin:"2%"}} variant="primary" >Edit profile</Button>
          </div>
          
          <h1 className="clientname">Client Investment Details</h1>
          <Table hover responsive id="table" style={{margin:"2%",width:"92%",textAlign:"center"}}>
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
        
    </div>
  )
}