import React, { useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartContext from './components/store/cartContext';

function App() {
  const [isCartShown, setIsCartShown] = useState(false);

  function showCartHandler() {
    setIsCartShown(true);
  }

  function hideCartHandler() {
    setIsCartShown(false);
  }

  return (
    <CartContext.Provider
      value={{
        isCartShown: isCartShown,
        showCartHandler: showCartHandler,
        hideCartHandler: hideCartHandler,
      }}
    >
      {isCartShown && <Cart />}
      <Header />
      <main>
        <Meals />
      </main>
    </CartContext.Provider>
  );
}

export default App;
