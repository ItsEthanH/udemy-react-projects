import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          id="p1"
          key="p1"
          title="Test"
          price={6}
          description="This is a first product - amazing!"
        />
        <ProductItem
          id="p2"
          key="p2"
          title="Another Test"
          price={10}
          description="This is a second product to prove this works!"
        />
      </ul>
    </section>
  );
};

export default Products;
