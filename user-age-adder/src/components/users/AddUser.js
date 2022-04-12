import React from 'react';
import Card from '../ui/Card';

import styles from './AddUser.module.css';

function AddUser() {
  function addUserHandler(event) {
    event.preventDefault();
  }

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />

        <label htmlFor="age">Age</label>
        <input type="text" id="age" />

        <button type="submit">Add User</button>
      </form>
    </Card>
  );
}

export default AddUser;
