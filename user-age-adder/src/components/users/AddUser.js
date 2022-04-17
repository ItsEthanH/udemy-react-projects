import React, { useState } from 'react';

import Card from '../ui/Card';
import Button from '../ui/Button';

import styles from './AddUser.module.css';

function AddUser(props) {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  function addUserHandler(event) {
    event.preventDefault();
    if (!enteredUsername.trim() || !enteredAge.trim() || +enteredAge < 1) {
      alert('Please fill in all fields.');
      return;
    }

    props.onAdd(enteredUsername, enteredAge);

    setEnteredUsername('');
    setEnteredAge('');
  }

  function usernameChangeHandler(event) {
    setEnteredUsername(event.target.value);
  }

  function ageChangeHandler(event) {
    setEnteredAge(event.target.value);
  }

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={enteredUsername}
          onChange={usernameChangeHandler}
        />

        <label htmlFor="age">Age</label>
        <input
          type="text"
          id="age"
          value={enteredAge}
          onChange={ageChangeHandler}
        />

        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}

export default AddUser;
