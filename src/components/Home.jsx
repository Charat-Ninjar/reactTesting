import React from "react";
import Layout from "../Layout";
import DataTable from "./DataTable";
import { useState } from "react";
const Home = () => {
  const [showUserTable, setShowUserTable] = useState("default");

  const toggleSection = (showUserTable) => {
    setShowUserTable(showUserTable);
  };
  let title = "";

  if (showUserTable === "default") {
    title = "React - Assessment";
  } else if (showUserTable === "user") {
    title = "Home - User Sector";
  } else if (showUserTable === "admin") {
    title = "Home - Admin Sector";
  }

  return (
    <Layout>
      <div className="home-container mt-5">
        
        <h1>Generation Thailand <br></br>{title}</h1>
        <div className="button-container-home">
          <button className="button" onClick={() =>toggleSection("user")}>User Home Sector</button>
          <button className="button" onClick={() =>toggleSection("admin")}>Admin Home Sector</button>
        </div>
      </div>
      <DataTable showUserTable={showUserTable}/>
    </Layout>
  );
};

export default Home;
