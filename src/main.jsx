import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Owner from "./components/Owner.jsx";
import Home from "./components/Home.jsx";
import UserData from "./components/UserData.jsx";
import DataTable from "./components/DataTable.jsx";
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
    path: "/DataTable",
    element: (
      <UserData>
        <DataTable />
      </UserData>
    ),
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);