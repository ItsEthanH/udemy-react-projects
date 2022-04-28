import { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import cartButtonContext from '../store/cartButtonContext';

import classes from './CartButton.module.css';

function CartButton() {
  const buttonContext = useContext(cartButtonContext);

  return (
    <button className={classes.button} onClick={buttonContext.showCartHandler}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
}

export default CartButton;
