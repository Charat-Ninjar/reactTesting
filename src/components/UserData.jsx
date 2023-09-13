import React, { createContext, useContext, useState } from "react";

export const DataContext = createContext();

const UserData = ({ children }) => {

  const[data, setData] = useState([
    {
      name: "MR.Peth",
      lastName: "123",
      position: "admin",
    },
    {
      name: "MR.Ging",
      lastName: "123",
      position: "Super Admin",
    },
  ]);

  const addData = (newData) => {
    setData((prevData) => [...prevData, newData]);
  };

  return (
    <DataContext.Provider value={{ data, addData }}>
      {children}
    </DataContext.Provider>
  );
};

export function useData() {
    return useContext(DataContext)
}

export default UserData;
