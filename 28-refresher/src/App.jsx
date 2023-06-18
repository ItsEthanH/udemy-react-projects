import { useState } from 'react';

import MainHeader from './components/MainHeader';
import PostList from './components/PostList';

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(true);

  function toggleModalHandler() {
    setModalIsVisible((prevState) => !prevState);
  }

  return (
    <>
      <MainHeader toggleModal={toggleModalHandler} />
      <main>
        <PostList modalIsVisible={modalIsVisible} toggleModal={toggleModalHandler} />
      </main>
    </>
  );
}

export default App;
