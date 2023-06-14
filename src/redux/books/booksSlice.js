import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookers: [],
};

export const booksSlice = createSlice({
  name: 'booker',
  initialState,
  reducers: {
    adding: (state, action) => {
      state.bookers = [...state.bookers, action.payload];
    },
    removes: (state, action) => {
      const itemId = state.bookers.indexOf(action.payload);
      state.bookers = state.bookers.splice(itemId, 1);
    },
  },
});

export const { adding, removes } = booksSlice.actions;
export default booksSlice.reducer;
