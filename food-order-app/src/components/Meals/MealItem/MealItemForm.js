import { useContext } from 'react';
import cartContentsContext from '../../store/cartContentsContext';
import Input from '../../UI/Input';

import classes from './MealItemForm.module.css';

function MealItemForm(props) {
  const contentsContext = useContext(cartContentsContext);

  function addItemHandler(event) {
    event.preventDefault();
    contentsContext.addItemHandler(props.meal);
  }

  return (
    <form className={classes.form} onSubmit={addItemHandler}>
      <Input
        label="Amount"
        input={{
          id: 'amount-' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
    </form>
  );
}

export default MealItemForm;
