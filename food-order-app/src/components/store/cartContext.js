import { createContext } from 'react';

const cartContext = createContext({
  isCartShown: false,
  showCartHandler: () => {},
  hideCartHandler: () => {},
});

export default cartContext;
