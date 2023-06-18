import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';

import classes from './PostList.module.css';

function PostList({ modalIsVisible, toggleModal }) {
  const modalComponent = modalIsVisible && (
    <Modal onModalToggle={toggleModal}>
      <NewPost onModalToggle={toggleModal} />
    </Modal>
  );

  return (
    <>
      {modalComponent}
      <ul className={classes.posts}>
        <Post author="Ethan" body="React.js is awesome!" />
        <Post author="Max" body="Thank you for checking out my course!" />
      </ul>
    </>
  );
}

export default PostList;
