import Card from '../UI/Card';
import MealList from './MEAL_LIST';
import MealItem from './MealItem/MealItem';

import classes from './AvailableMeals.module.css';

function AvailableMeals() {
  const mealItems = MealList.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealItems}</ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;
