import { useEffect, useState } from 'react';

import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const AvailableMeals = () => {
  const [mealsList, setMealsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch(
        'https://react-meals-fe8e6-default-rtdb.europe-west1.firebasedatabase.app/meals.json'
      );

      if (!response.ok) {
        throw new Error(
          'Recipes cannot be retrieved at this time. Please try again later'
        );
      }

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
      setLoading(false);
    }

    fetchMeals().catch((err) => {
      setLoading(false);
      setError(err.message);
    });
  }, [mealsList]);

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{!loading && !error && mealsList}</ul>
        {loading && <p className="centered">Loading...</p>}
        {error && <p className="centered">{error}</p>}
      </Card>
    </section>
  );
};

export default AvailableMeals;
