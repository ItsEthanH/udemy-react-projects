import { useSelector, useDispatch } from 'react-redux';

import { authActions } from '../store/auth';

import classes from './Header.module.css';

const Header = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  function logoutHandler() {
    dispatch(authActions.logout());
  }

  const headerContents = (
    <nav>
      <ul>
        <li>
          <a href="/">My Products</a>
        </li>
        <li>
          <a href="/">My Sales</a>
        </li>
        <li>
          <button onClick={logoutHandler}>Logout</button>
        </li>
      </ul>
    </nav>
  );

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuthenticated && headerContents}
    </header>
  );
};

export default Header;
