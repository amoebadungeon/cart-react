import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import counterIncrement from './reducer';
import cartReducer from './cartReducer';
import { loadState, saveState } from '../../utils/localstorage'; // Import the loadState and saveState functions
import throttle from 'lodash/throttle'; // Throttle ensures saveState does not get called too often

const persistedState = loadState(); // Load state from local storage

const loggerMiddleware = createLogger();

const store = configureStore({
  reducer: {
    counter: counterIncrement,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
  preloadedState: persistedState, // Preload the state
});

store.subscribe(throttle(() => {
  saveState({
    cart: store.getState().cart // Only save the cart part of the state or whatever you need
  });
}, 1000)); // Save the state at most once per second

export default store;
