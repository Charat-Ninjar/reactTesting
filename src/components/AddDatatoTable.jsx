import React from "react";
import UserData, { useData } from "./UserData";
import { useState } from "react";

const AddDataToTable = () => {
  const [newUser, setNewUser] = useState({
    name: "",
    lastName: "",
    position: "",
  });

  const { addData } = useData();

  const handleInputNewUserChange = (event) => {
    const { name, value } = event.target;
    setNewUser({
      ...newUser,
      [name]: value,
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
    <UserData>
    <div>
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
    </div>
    </UserData>
  );
};

export default AddDataToTable;
