import { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import cartButtonContext from '../store/cartButtonContext';
import cartContentsContext from '../store/cartContentsContext';

import classes from './CartButton.module.css';

function CartButton() {
  const [btnAnimation, setBtnAnimation] = useState(false);
  const buttonContext = useContext(cartButtonContext);
  const contentsContext = useContext(cartContentsContext);

  const { items } = contentsContext;

  const btnClasses = `${classes.button} ${btnAnimation ? classes.bump : ''}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnAnimation(true);

    const timer = setTimeout(() => {
      setBtnAnimation(false);
    }, 300);

    return function () {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={buttonContext.showCartHandler}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{contentsContext.overallQuantity}</span>
    </button>
  );
}

export default CartButton;
