import React from "react";
import { useData } from "./UserData";
import { useState } from "react";

const AddData = () => {
  const [newUser, setNewUser] = useState({
    username: "",
    lastName: "",
    position: "",
  });
  // const [userName, setUserName] = useState();
  // const [userLastName, setUserLastName] = useState();
  // const [userPosition, setUserPosition] = useState();

  const { addData } = useData();
  
  const handleInputNewUserChange = (event) => {
    console.log("testnewUser")
    const { name, value } = event.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };

  const insertDataFromInputToDatabase = () => {
    console.log("newUser")
    addData(newUser);
    setNewUser({
      username: "",
      lastName: "",
      position: "",
    });
    console.log(data)
  };
  return (

    <div className="create-form-container m-4 ">
      <h3 style={{color:"black"}}>Create User Here</h3>
      <form className="form-box">
        <input
          type="text"
          name="username"
          placeholder="Name"
          className="form-control input-box"
          value={newUser.username}
          onChange={handleInputNewUserChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          className="form-control input-box"
          value={newUser.lastName}
          onChange={handleInputNewUserChange}
        />
        <input
          type="text"
          name="position"
          placeholder="Position"
          className="form-control input-box"
          value={newUser.position}
          onChange={handleInputNewUserChange}
        />
        <button
          type="button"
          className="btn btn-primary"
          onClick={insertDataFromInputToDatabase}
        >
          Save
        </button>
      </form>
      
    </div>

  );
};

export default AddData;
