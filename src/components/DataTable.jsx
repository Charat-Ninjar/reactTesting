import React, { useState } from "react";
import UserData, { useData } from "./UserData";
import AddDataToTable from "./AddDatatoTable";

const DataTable = ({ showUserTable }) => {
  const { data } = useData();

//   const { addData } = useData();


  return (
    <div className="data-table">
      <div
        className="user-data-table"
        style={{ display: showUserTable == "user" ? "block" : "none" }}
      >
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Last Name</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.lastName}</td>
                <td>{user.position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div
        className="admin-data-table"
        style={{ display: showUserTable == "admin" ? "block" : "none" }}
      >
        <AddDataToTable/>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Last Name</th>
              <th>Position</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.lastName}</td>
                <td>{user.position}</td>
                <td>Delete</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
