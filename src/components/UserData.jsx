import React, { createContext, useContext, useState } from "react";

const DataContext = createContext();

const UserData = ({ children }) => {

  const[data, setData] = useState([
    {
      username: "MR.Peth",
      lastName: "123",
      position: "admin",
    },
    {
      username: "MR.Ging",
      lastName: "123",
      position: "Super Admin",
    },
  ]);

  const addData = (newData) => {
    console.log("add data")
    setData((prevData) => [...prevData, newData]);
  };

  const deleteData = (index) => {
    setData((prevData) => {
      const newData = [...prevData];
      newData.splice(index, 1);
      return newData;
    });
  };

  return (
    <DataContext.Provider value={{ data, addData, deleteData }}>
      {children}
    </DataContext.Provider>
  );
};

export function useData() {
    return useContext(DataContext)
}

export default UserData;
