import { useDispatch } from 'react-redux';

import Card from '../UI/Card';
import { cartActions } from '../../store/cart';

import classes from './ProductItem.module.css';

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const { id, title, price, description } = props;

  function addToCartHandler() {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        priceEach: price,
      })
    );
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
