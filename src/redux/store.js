// Redux Store - central store configuration
// Combines all slices (cart, search) into one store
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    // search reducer will be added in Phase 6
  },
});

export default store;
