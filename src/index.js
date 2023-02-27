import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import SignUpp from './Pages/SignUpp';
import { Logininvs } from './Pages/Logininvs';
import { Loginadv } from './Pages/Loginadv';
import { Dashboardadv } from './Pages/Dashboardadv';
import { ClientList } from './Pages/ClientList';
import { ForgetPassword } from './Pages/forgetPassword';
import { Investment } from './Pages/Investment';
import { AdviserProfile } from './Pages/AdvisorProfile';
import { AddClient } from './Pages/AddClient';
import { EditClientDetails } from './Pages/editClientDetails';
import { ClientDetails } from './Pages/ClientDetails';
import ResetPassword from './Pages/ResetPassword';
import { Abcd } from './Pages/abc'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "SignUpp",
    element: <SignUpp />,
  },
  {
    path: "logininvs",
    element: <Logininvs />,
  },
  {
    path: "loginadv",
    element: <Loginadv />,
  },
  {
    path: "dashboardadv",
    element: <Dashboardadv />,
  },
  {
    path: "clientlist",
    element: <ClientList />,
  },
  {
    path: "forgetPassword",
    element: <ForgetPassword />,
  },
  {
    path: "profileadv",
    element: <AdviserProfile />,
  },
  {
    path: "addclient",
    element: <AddClient />,
  },
  {
    path: "investment/:id",
    element: <Investment />,
  },
  {
    path: "editDetails/:EcliID",
    element: <EditClientDetails />,
  },
  {
    path: "clientDetails/:EcliID",
    element: <ClientDetails />,
  },
  {
    path: "abc",
    element: <Abcd />,
  },
  {
    path:"ResetPassword",
    element: <ResetPassword />,
  }

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
