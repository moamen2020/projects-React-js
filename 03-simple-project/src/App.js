import React, { useState } from "react";
import AddUser from "./component/Users/AddUser";
import UsersList from "./component/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUsersHandler = (uName, uAge) => {
    setUsersList((prevUserList) => {
      return [
        ...prevUserList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUsersHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
