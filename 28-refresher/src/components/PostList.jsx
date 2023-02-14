import Post from './Post';
import NewPost from './NewPost';

import classes from './PostList.module.css';

function PostList() {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="Ethan" body="React.js is awesome!" />
        <Post author="Max" body="Thank you for checking out my course!" />
      </ul>
    </>
  );
}

export default PostList;
