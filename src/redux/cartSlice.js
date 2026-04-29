// Cart Slice - manages all cart state using Redux Toolkit
// Actions: addToCart, removeFromCart, updateQuantity, clearCart
// Each action modifies the cart items array in the Redux store
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  // Initial state — empty cart
  initialState: {
    items: [],  // array of { ...product, quantity }
  },
  reducers: {
    // Add a product to the cart
    // If the product already exists, increase its quantity by 1
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        // Product already in cart — increment quantity
        existingItem.quantity += 1;
      } else {
        // New product — add with quantity 1
        state.items.push({ ...product, quantity: 1 });
      }
    },

    // Remove a product from the cart entirely
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.items = state.items.filter((item) => item.id !== productId);
    },

    // Update the quantity of a specific product
    // Quantity should never go below 1
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;

      // Don't allow quantity below 1
      if (quantity < 1) return;

      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
    },

    // Clear all items from the cart (used after placing an order)
    clearCart: (state) => {
      state.items = [];
    },
  },
});

// Export actions — these are dispatched from components
export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;

// Selectors — used to read data from the Redux store
// Select all cart items
export const selectCartItems = (state) => state.cart.items;

// Select total number of items in cart (sum of all quantities)
export const selectCartCount = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);

// Select total price of all cart items
export const selectCartTotal = (state) =>
  state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);

// Export the reducer — used in store configuration
export default cartSlice.reducer;
