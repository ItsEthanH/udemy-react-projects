import react from 'react';

import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';
import CartButton from './CartButton';

function Header(props) {
  return (
    <react.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <CartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="A buffet of delicious food"></img>
      </div>
    </react.Fragment>
  );
}

export default Header;
