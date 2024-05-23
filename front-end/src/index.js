import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './pages/Login'
import AddMenu from './pages/AddMenu'
import EmployeeChoice from './pages/EmployeeChoice';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ViewMenu from './pages/ViewMenu';
import MyChoice from './pages/MyChoice';

//const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    index:true,
    element: <Login /> ,
  },
  {
    path: "admin",
    element: <AddMenu /> ,
  },
  {
    path: "admin/add-menu",

    element: <AddMenu /> ,
  },
  {
    path: "admin/employee-choice",

    element: <EmployeeChoice /> ,
  },
  {
    path: "employee/view-menu",

    element: <ViewMenu /> ,
  },
  {
    path: "/employee/employee-choice",

    element: <MyChoice /> ,
  },
  {
    path: "employee",
    element: <ViewMenu /> ,
  },
  {
    path: "logout",
    element: <Login /> ,
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
