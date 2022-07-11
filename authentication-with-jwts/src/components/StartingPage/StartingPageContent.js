import { useContext } from 'react';
import AuthContext from '../../context/authContext';

import classes from './StartingPageContent.module.css';

const StartingPageContent = () => {
  const authCtx = useContext(AuthContext);

  return (
    <section className={classes.starting}>
      <h1>Welcome on Board!</h1>
      <h3>
        You are
        {authCtx.isLoggedIn
          ? ' logged in!'
          : ' not logged in! Click the button at the top to log in!'}
      </h3>
    </section>
  );
};

export default StartingPageContent;
