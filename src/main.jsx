import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Owner from "./components/Owner.jsx";
import Home from "./components/Home.jsx";
import UserData from "./components/UserData.jsx";
import AddDataToTable from "./components/AddData.jsx";
import AdminDataTable from "./components/AdminDataTable.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <UserData>
        <Home />
      </UserData>
    ),
  },
  {
    path: "/Owner",
    element: <Owner />,
  },
  {
    path: "/AdminDataTable",
    element:( 
    <AdminDataTable>
    <AddDataToTable />
    </AdminDataTable>
    ),
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
