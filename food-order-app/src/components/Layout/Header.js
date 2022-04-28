import { Fragment } from 'react';

import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';
import CartButton from './CartButton';

function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <CartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="A buffet of delicious food"></img>
      </div>
    </Fragment>
  );
}

export default Header;
