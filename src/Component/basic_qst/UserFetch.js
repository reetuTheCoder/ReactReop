import React, { use, useEffect, useState } from "react";

const UserFetch = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("something is wrong");
        }
        return resp.json()
      })
      .then((data) => setUsers(data))
      .catch((error) => console.log("error", error));
  },[]);
  return (
    <div>
      <ul>
        {
          users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))
        }
      </ul>
    </div>
  );
};

export default UserFetch;
