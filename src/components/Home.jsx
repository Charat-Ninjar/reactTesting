import React from "react";
import Layout from "../Layout";
import DataTable from "./DataTable";
import { useState } from "react";
const Home = () => {
  const [showUserTable, setShowUserTable] = useState(false);

  const toggleSection = (showUserTable) => {
    setShowUserTable(showUserTable);
  };
  return (
    <Layout>
      <div className="home-container mt-5">
        <h1>
          Generation Thailand <br></br> React - Assessment
        </h1>
        <div className="button-container-home">
          <button className="button" onClick={() =>toggleSection(false)}>User Home Sector</button>
          <button className="button" onClick={() =>toggleSection(true)}>Admin Home Sector</button>
        </div>
      </div>
      <DataTable showUserTable={showUserTable}/>
    </Layout>
  );
};

export default Home;
