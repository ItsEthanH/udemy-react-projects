import React, { useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import cartButtonContext from './components/store/cartButtonContext';

function App() {
  const [isCartShown, setIsCartShown] = useState(false);

  const cartContextValue = {
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

  return (
    <cartButtonContext.Provider value={cartContextValue}>
      {isCartShown && <Cart />}
      <Header />
      <main>
        <Meals />
      </main>
    </cartButtonContext.Provider>
  );
}

export default App;
