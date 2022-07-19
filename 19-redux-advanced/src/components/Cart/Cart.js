import { useSelector } from 'react-redux';

import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);

  const renderedCartItems = cartItems.map((item) => {
    return (
      <CartItem
        item={{
          id: item.id,
          key: item.id,
          title: item.title,
          quantity: item.quantity,
          price: item.priceEach,
          total: item.quantity * item.priceEach,
        }}
      />
    );
  });

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>{renderedCartItems}</ul>
    </Card>
  );
};

export default Cart;
