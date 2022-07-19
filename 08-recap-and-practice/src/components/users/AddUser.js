import React, { useState, useRef } from 'react';

import Card from '../ui/Card';
import Button from '../ui/Button';

import styles from './AddUser.module.css';

function AddUser(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  function addUserHandler(event) {
    event.preventDefault();
    let enteredUsername = nameInputRef.current.value;
    let enteredAge = ageInputRef.current.value;

    if (!enteredUsername.trim() || !enteredAge.trim()) {
      props.onError(
        'Invalid Entries',
        'Please enter non-empty values for name and age.',
        true
      );
      return;
    }

    if (+enteredAge < 1) {
      props.onError('Invalid Age', 'Age cannot be less than 1.', true);
      return;
    }

    props.onAdd(enteredUsername, enteredAge);

    // rarely do this!
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  }

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" ref={nameInputRef} />

        <label htmlFor="age">Age</label>
        <input type="text" id="age" ref={ageInputRef} />

        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}

export default AddUser;
