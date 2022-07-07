import { createSlice } from '@reduxjs/toolkit';

const intialCartState = { shown: false, numOfItems: 0, items: [] };

const cartSlice = createSlice({
  name: 'cart',
  initialState: intialCartState,
  reducers: {
    toggleCart(state) {
      state.shown = !state.shown;
    },

    addItemToCart(state, action) {
      state.numOfItems++;

      for (let i = 0; i < state.items.length; i++) {
        if (state.items[i].id === action.payload.id) {
          state.items[i].quantity++;
          return;
        }
      }

      state.items.push({
        id: action.payload.id,
        title: action.payload.title,
        quantity: 1,
        priceEach: action.payload.priceEach,
      });
    },

    increaseCartItem(state, action) {
      for (let i = 0; i < state.items.length; i++) {
        if (state.items[i].id === action.payload.id) {
          state.items[i].quantity++;
          state.numOfItems++;
          return;
        }
      }
    },

    decreaseCartItem(state, action) {
      for (let i = 0; i < state.items.length; i++) {
        if (state.items[i].id === action.payload.id) {
          state.items[i].quantity--;
          state.numOfItems--;

          if (state.items[i].quantity === 0) {
            state.items.splice(i, 1);
          }

          return;
        }
      }
    },
  },
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
