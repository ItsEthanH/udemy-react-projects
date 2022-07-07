import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui';

import classes from './CartButton.module.css';

const CartButton = () => {
  const dispatch = useDispatch();
  const numOfItems = useSelector((state) => state.cart.numOfItems);

  function cartButtonHandler() {
    dispatch(uiActions.toggleCart());
  }

  return (
    <button className={classes.button} onClick={cartButtonHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{numOfItems}</span>
    </button>
  );
};

export default CartButton;
