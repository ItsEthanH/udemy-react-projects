import { useContext } from 'react';
import cartContext from '../store/cartContext';
import Modal from '../UI/Modal';

import classes from './Cart.module.css';

function Cart() {
  let ctx = useContext(cartContext);
  let cartList = [{ id: 't1', name: 'Sushi', amount: 2, price: 12.99 }];

  const cartItems = cartList.map((item) => <li>{item.name}</li>);

  return (
    <Modal>
      <ul className={classes['cart-items']}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>£29.99</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes['button--alt']}
          onClick={ctx.hideCartHandler}
        >
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
