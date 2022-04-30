import { useContext } from 'react';
import cartButtonContext from '../store/cartButtonContext';
import cartContentsContext from '../store/cartContentsContext';

import CartItem from './CartItem';
import Modal from '../UI/Modal';

import classes from './Cart.module.css';

function Cart() {
  let buttonContext = useContext(cartButtonContext);
  let contentsContext = useContext(cartContentsContext);

  function cartItemAddHandler(item) {
    const cartItem = { ...item, quantity: 1 };
    contentsContext.addItemHandler(cartItem);
  }

  function cartItemRemoveHandler(id) {
    contentsContext.removeItemHandler(id);
  }

  const cartItems = contentsContext.items.map((item) => (
    <li key={item.id}>
      <CartItem
        name={item.name}
        price={item.price}
        amount={item.quantity}
        onAdd={cartItemAddHandler.bind(null, item)}
        onRemove={cartItemRemoveHandler.bind(null, item.id)}
      />
    </li>
  ));

  const displayedPrice = `£${contentsContext.totalAmount.toFixed(2)}`;

  return (
    <Modal>
      <ul className={classes['cart-items']}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{displayedPrice}</span>
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
