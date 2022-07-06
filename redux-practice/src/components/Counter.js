import { useSelector, useDispatch } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
  const increaseAmount = 17;
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  function incrementHandler() {
    dispatch({ type: 'increment' });
  }

  function increaseHandler() {
    dispatch({ type: 'increase', amount: increaseAmount });
  }

  function decrementHandler() {
    dispatch({ type: 'decrement' });
  }

  function toggleCounterHandler() {}

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseHandler}>Increase by {increaseAmount}</button>
        <button onClick={incrementHandler}>Increment</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
