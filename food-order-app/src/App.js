//TODO
//Implement quantities for each mealItem

import React, { useState, useReducer } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import cartButtonContext from './components/store/cartButtonContext';
import cartContentsContext from './components/store/cartContentsContext';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

function cartReducer(state, action) {
  if (action.type === 'ADD_ITEM') {
    const updatedItems = state.items.concat(action.meal);
    const updatedTotalAmount = state.totalAmount + action.meal.price;

    console.log(updatedTotalAmount);
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
}

function App() {
  const [isCartShown, setIsCartShown] = useState(false);
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const cartButtonValue = {
    isCartShown: isCartShown,
    showCartHandler: showCartHandler,
    hideCartHandler: hideCartHandler,
  };

  function showCartHandler() {
    setIsCartShown(true);
  }

  function hideCartHandler() {
    setIsCartShown(false);
  }

  const cartContentsValue = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItemHandler: addItemHandler,
    removeItemHandler: removeItemHandler,
  };

  function addItemHandler(meal) {
    dispatchCartAction({
      type: 'ADD_ITEM',
      meal: meal,
    });
  }

  function removeItemHandler() {}

  return (
    <cartContentsContext.Provider value={cartContentsValue}>
      <cartButtonContext.Provider value={cartButtonValue}>
        {isCartShown && <Cart />}
        <Header />
        <main>
          <Meals />
        </main>
      </cartButtonContext.Provider>
    </cartContentsContext.Provider>
  );
}

export default App;
