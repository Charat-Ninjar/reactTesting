import React, { useState } from "react";
import UserData, { useData } from "./UserData";

const DataTable = ({ showUserTable }) => {
  const [newUser, setNewUser] = useState({
    name: "",
    lastName: "",
    position: "",
  });

  const { data } = useData();
  const { addData } = useData();

  const handleInputNewUserChange = (event) => {
    const { newName, value } = event.target;
    setNewUser({
      ...newUser,
      [newName]: value,
    });
  };

  const insertDataFromInputToDatabase = () => {
    addData(newUser);
    setNewUser({
      name: "",
      lastName: "",
      position: "",
    });
  };
  return (
    <div className="data-table">
      <div
        className="user-data-table"
        style={{ display: showUserTable === "default" && "admin" ? "none" : "block" }}
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
        style={{ display: showUserTable === "admin" || "" ? "block" : "none" }}
      >
        <h3 className="color:white">Create User Here</h3>
        <div className="create-form-container">
          <form className="form-box">
            <span>
              <input
                type="text"
                placeholder="Name"
                className="form-control"
                value={newUser.name}
                onChange={handleInputNewUserChange}
              />
            </span>
            <span>
              <input
                type="text"
                placeholder="Last Name"
                className="form-control"
                value={newUser.lastName}
                onChange={handleInputNewUserChange}
              />
            </span>
            <span>
              <input
                type="text"
                placeholder="Position"
                className="form-control"
                value={newUser.position}
                onChange={handleInputNewUserChange}
              />
            </span>
            
            <span>
              <button
              type="button"
                className="-button"
                onClick={insertDataFromInputToDatabase}
              >
                Save
              </button>
            </span>
          </form>
        </div>
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
