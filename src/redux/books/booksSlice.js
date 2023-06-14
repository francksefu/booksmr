import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookers: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};

export const booksSlice = createSlice({
  name: 'booker',
  initialState,
  reducers: {
    adding: (state, action) => {
      state.bookers = [...state.bookers, action.payload];
    },
    removes: (state, action) => {
      state.bookers = state.bookers.filter((item) => item.item_id !== action.payload.item_id);
    },
  },
});

export const { adding, removes } = booksSlice.actions;
export default booksSlice.reducer;
