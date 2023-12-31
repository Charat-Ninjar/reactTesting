import React from "react";
import Layout from "../Layout";
import { useState } from "react";
import UserDataTable from "./UserDataTable";
import AdminDataTable from "./AdminDataTable";

const Home = () => {
  const [showUserTable, setShowUserTable] = useState("default");
  
  const [title, setTitle] = useState("React - Assessment");

  const toggleSection = (showUserTable) => {
    setShowUserTable(showUserTable);
    if (showUserTable === "default") {
      setTitle("React - Assessment");
    } else if (showUserTable === "user") {
      setTitle("Home - User Sector");
    } else if (showUserTable === "admin") {
      setTitle("Home - Admin Sector");
    }
  };

  return (
    <Layout>
      <div className="home-container mt-5">
        <h1>
          Generation Thailand <br></br>
          {title}
        </h1>
        <div className="button-container-home">
          <button className="button" onClick={() => toggleSection("user")}>
            User Home Sector
          </button>
          <button className="button" onClick={() => toggleSection("admin")}>
            Admin Home Sector
          </button>
        </div>
      </div>
      {showUserTable == "user" ? (
        <UserDataTable />
      ) : showUserTable == "admin" ? (
          <AdminDataTable />
      ) : (
        ""
      )}
    </Layout>
  );
};

export default Home;
