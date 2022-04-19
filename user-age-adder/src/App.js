import React, { useState } from 'react';
import AddUser from './components/users/AddUser';
import UserList from './components/users/UserList';
import ErrorModal from './components/ui/ErrorModal';

function App() {
  const [usersList, setUsersList] = useState([]);
  const [errorTitle, setErrorTitle] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [modalShow, setModalShow] = useState(false);

  function addUserHandler(name, age) {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { key: Math.random(), name: name, age: age }];
    });
  }

  function errorHandler(title, message, show) {
    setErrorTitle(title);
    setErrorMessage(message);
    setModalShow(show);
  }

  return (
    <React.Fragment>
      <ErrorModal
        title={errorTitle}
        message={errorMessage}
        show={modalShow}
        onButtonClick={errorHandler}
      />
      <AddUser onAdd={addUserHandler} onError={errorHandler} />;
      <UserList users={usersList} />
    </React.Fragment>
  );
}

export default App;
