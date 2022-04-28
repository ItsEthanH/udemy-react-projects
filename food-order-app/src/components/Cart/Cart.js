import { useContext } from 'react';
import cartButtonContext from '../store/cartButtonContext';
import cartContentsContext from '../store/cartContentsContext';
import Modal from '../UI/Modal';

import classes from './Cart.module.css';

function Cart() {
  let buttonContext = useContext(cartButtonContext);
  let contentsContext = useContext(cartContentsContext);
  let cartList = contentsContext.items;

  const cartItems = cartList.map((item) => <li>{item.name}</li>);

  return (
    <Modal>
      <ul className={classes['cart-items']}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>£{contentsContext.totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes['button--alt']}
          onClick={buttonContext.hideCartHandler}
        >
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
