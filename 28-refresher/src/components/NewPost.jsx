import { useState } from 'react';

import classes from './NewPost.module.css';

function NewPost({ onModalToggle }) {
  const [enteredAuthor, setEnteredAuthor] = useState();
  const [enteredBody, setEnteredBody] = useState();

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      author: enteredAuthor,
      body: enteredBody,
    };

    console.log(postData);
    onModalToggle();
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="name">
        Your name
        <input type="text" id="name" required onChange={authorChangeHandler} />
      </label>

      <label htmlFor="body">
        Text
        <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
      </label>

      <div className={classes.actions}>
        <button type="button" onClick={onModalToggle}>
          Cancel
        </button>
        <button>Submit</button>
      </div>
    </form>
  );
}

export default NewPost;
