import React from "react";
import { useData } from "./UserData";
import AddData from "./AddData";

const AdminDataTable = () => {
  const { data, deleteData } = useData();

  const handleDelete = (index) => {
    deleteData(index)
  }

  return (
    <div>
      <AddData/>
      <div className="data-table">
        <div className="admin-data-table">
          <table>
            <thead>
              <tr>
                <th className="left-table-head">Name</th>
                <th>Last Name</th>
                <th>Position</th>
                <th className="right-table-head">Action</th>
              </tr>
            </thead>
            <tbody className="table-body">
              {data.map((user, index) => (
                <tr key={user.id}>
                  <td>{user.username}</td>
                  <td>{user.lastName}</td>
                  <td>{user.position}</td>
                  <td><div className="delete-data" onClick={() => handleDelete(index)}>Delete</div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDataTable;
