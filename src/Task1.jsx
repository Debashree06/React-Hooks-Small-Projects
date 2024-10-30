import React, { useEffect, useState } from "react";

function Task1() {
  const [data, setData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  const handleRowClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        <h2>User List</h2>
        <table border="1" cellPadding="10">
          <thead style={{ backgroundColor: "green", color: "white" }}>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr
                key={user.id}
                onClick={() => handleRowClick(user)}
                style={{ cursor: "pointer" }}
              >
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ flex: 1, marginLeft: "20px" }}>
        {selectedUser ? (
          <div>
            <h2>User Details</h2>
            <p>
              <strong>Name:</strong> {selectedUser.name}
            </p>
            <p>
              <strong>Username:</strong> {selectedUser.username}
            </p>
            <p>
              <strong>Email:</strong> {selectedUser.email}
            </p>
            <p>
              <strong>Phone:</strong> {selectedUser.phone}
            </p>
            <p>
              <strong>Website:</strong> {selectedUser.website}
            </p>
            <p>
              <strong>Company:</strong> {selectedUser.company.name}
            </p>
            <p>
              <strong>Address:</strong> {selectedUser.address.street},{" "}
              {selectedUser.address.city}
            </p>
          </div>
        ) : (
          <h2>Select a user to view details</h2>
        )}
      </div>
    </div>
  );
}

export default Task1;
