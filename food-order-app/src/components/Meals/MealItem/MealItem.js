import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

function MealItem(props) {
  const price = props.meal.price.toFixed(2);

  return (
    <li className={classes.meal} id={props.meal.id}>
      <div>
        <h3>{props.meal.name}</h3>
        <div className={classes.description}>{props.meal.description}</div>
        <div className={classes.price}>£{price}</div>
      </div>
      <div>
        <MealItemForm
          id={props.meal.id}
          meal={props.meal}
          price={props.meal.price}
        />
      </div>
    </li>
  );
}

export default MealItem;
