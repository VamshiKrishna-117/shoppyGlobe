// Search Slice - manages the search/filter state for products
// The search term is stored in Redux so it persists across navigation
import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchTerm: '',  // the current search query
  },
  reducers: {
    // Update the search term when user types in the search bar
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },

    // Clear the search term
    clearSearch: (state) => {
      state.searchTerm = '';
    },
  },
});

// Export actions
export const { setSearchTerm, clearSearch } = searchSlice.actions;

// Selector — read the current search term from the store
export const selectSearchTerm = (state) => state.search.searchTerm;

// Export the reducer
export default searchSlice.reducer;
