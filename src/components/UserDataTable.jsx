import React from "react";
import { useData } from "./UserData";

const UserDataTable = () => {
  const { data } = useData();
  return (
    <div className="data-table">
      <div className="user-data-table">
        <h1>user table</h1>
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
                <td>{user.username}</td>
                <td>{user.lastName}</td>
                <td>{user.position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default UserDataTable;
