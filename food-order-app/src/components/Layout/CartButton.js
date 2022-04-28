import { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import cartContext from '../store/cartContext';

import classes from './CartButton.module.css';

function CartButton() {
  const ctx = useContext(cartContext);

  return (
    <button className={classes.button} onClick={ctx.showCartHandler}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
}

export default CartButton;
