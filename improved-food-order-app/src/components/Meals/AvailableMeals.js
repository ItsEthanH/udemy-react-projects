import { useEffect, useState } from 'react';

import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const AvailableMeals = () => {
  const [mealsList, setMealsList] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch(
        'https://react-meals-fe8e6-default-rtdb.europe-west1.firebasedatabase.app/meals.json'
      );

      const data = await response.json();
      const renderedMeals = [];

      for (const item in data) {
        renderedMeals.push(
          <MealItem
            key={item}
            id={item}
            name={data[item].name}
            description={data[item].description}
            price={data[item].price}
          />
        );
      }
      setMealsList(renderedMeals);
    }
    fetchMeals();
  }, [mealsList]);

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
