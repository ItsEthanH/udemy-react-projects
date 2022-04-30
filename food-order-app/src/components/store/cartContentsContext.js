import { createContext } from 'react';

const cartContentsContext = createContext({
  items: [],
  totalAmount: 0,
  overallQuantity: 0,
  addItemHandler: () => {},
  removeItemHandler: () => {},
});

export default cartContentsContext;
