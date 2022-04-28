import react from 'react';

import MealsSummary from './MealsSummary';
import AvailableMeals from './AvaialableMeals';

function Meals() {
  return (
    <react.Fragment>
      <MealsSummary />
      <AvailableMeals />
    </react.Fragment>
  );
}

export default Meals;
