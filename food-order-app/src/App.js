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
  overallQuantity: 0,
};

function cartReducer(state, action) {
  if (action.type === 'ADD_ITEM') {
    const updatedTotalAmount =
      state.totalAmount + action.meal.price * action.meal.quantity;

    const updatedOverallQuantity = state.overallQuantity + action.meal.quantity;

    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.meal.id
    );

    const existingItem = state.items[existingItemIndex];
    let updatedItems;

    if (existingItem) {
      let updatedItem;
      updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + action.meal.quantity,
      };

      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat({ ...action.meal });
    }

    return {
      id: action.meal.id,
      items: updatedItems,
      overallQuantity: updatedOverallQuantity,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === 'REMOVE_ITEM') {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingItem = state.items[existingItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    const updatedOverallQuantity = state.overallQuantity - 1;

    let updatedItems;

    if (existingItem.quantity === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      overallQuantity: updatedOverallQuantity,
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
    id: cartState.id,
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    overallQuantity: cartState.overallQuantity,
    addItemHandler: addItemHandler,
    removeItemHandler: removeItemHandler,
  };

  function addItemHandler(meal) {
    dispatchCartAction({
      type: 'ADD_ITEM',
      meal: meal,
    });
  }

  function removeItemHandler(id) {
    dispatchCartAction({
      type: 'REMOVE_ITEM',
      id: id,
    });
  }

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
