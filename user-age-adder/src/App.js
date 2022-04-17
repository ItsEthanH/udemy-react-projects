import React, { useState } from 'react';
import AddUser from './components/users/AddUser';
import UserList from './components/users/UserList';

function App() {
  const [usersList, setUsersList] = useState([]);

  function addUserHandler(name, age) {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { key: Math.random(), name: name, age: age }];
    });
  }

  return (
    <div>
      <AddUser onAdd={addUserHandler} />;
      <UserList users={usersList} />
    </div>
  );
}

export default App;
