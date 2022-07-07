import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart';

import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const numOfItems = useSelector((state) => state.cart.numOfItems);

  function cartButtonHandler() {
    dispatch(cartActions.toggleCart());
  }

  return (
    <button className={classes.button} onClick={cartButtonHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{numOfItems}</span>
    </button>
  );
};

export default CartButton;
