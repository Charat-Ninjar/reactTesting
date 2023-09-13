import React, { useState } from "react";
import UserData, { useData } from "./UserData";
import AddDataToTable from "./AddDataToTable";

const DataTable = () => {
  const { data } = useData();

  //   const { addData } = useData();

  return (
    <div>
      <AddDataToTable />
      <div className="data-table">
        <div className="admin-data-table">
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
                  <td>{user.username}</td>
                  <td>{user.lastName}</td>
                  <td>{user.position}</td>
                  <td>Delete</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
