import classes from './NewPost.module.css';

function NewPost() {
  return (
    <form className={classes.form}>
      <label htmlFor="name">
        Your name
        <input type="text" id="name" required />
      </label>

      <label htmlFor="body">
        Text
        <textarea id="body" required rows={3} />
      </label>
    </form>
  );
}

export default NewPost;
