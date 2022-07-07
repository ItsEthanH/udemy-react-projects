// THE EASIER WAY OF USING REDUX, USING REDUX TOOLKIT *yay*
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialAuthState = { isAuthenticated: false };
const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const initialCounterState = { value: 0, showCounter: true };
const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.value++;
    },
    increase(state, action) {
      state.value += action.payload;
    },
    decrement(state) {
      state.value--;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export default store;
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

// THE TRADITIONAL WAY OF USING REDUX, WITHOUT REDUX TOOLKIT *yawn*

// import { createStore } from 'redux';

// function counterReducer(state = initialState, action) {
//   if (action.type === 'increment') {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === 'increase') {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === 'decrement') {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === 'toggle') {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter,
//     };
//   }

//   return state;
// }

// const store = createStore(counterReducer);
// export default store;
