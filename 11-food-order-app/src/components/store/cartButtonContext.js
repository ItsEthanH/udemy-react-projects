import { createContext } from 'react';

const cartButtonContext = createContext({
  isCartShown: false,
  showCartHandler: () => {},
  hideCartHandler: () => {},
});

export default cartButtonContext;
