import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  bookers: [],
  isLoading: false,
};

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

export const getbook = createAsyncThunk('books/getbook', async (thunkAPI) => {
  try {
    const response = await axios.get(`${url}/apps/XGpFs782LEwopzLyeLb1/books`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('sorry, something is wrong');
  }
});

export const sendbook = createAsyncThunk('book/sendbook', async (book) => {
  const response = await axios.post(`${url}/apps/XGpFs782LEwopzLyeLb1/books/`, {
    item_id: book.item_id,
    title: book.title,
    author: book.author,
    category: 'science',
  });

  return response.data;
});

export const deleteBook = createAsyncThunk('book/deleteBook', async (id) => {
  const response = await axios.delete(`${url}/apps/XGpFs782LEwopzLyeLb1/books/${id}`);
  return response.data;
});

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
  extraReducers: (builder) => {
    builder
      .addCase(getbook.fulfilled, (state, action) => ({
        ...state,
        bookers: Object.entries(action.payload).map(([itemId, [book]]) => ({ itemId, ...book })),
      }))
      .addCase(sendbook.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(deleteBook.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(sendbook.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        bookers: [...state.bookers, action.payload],
      }))
      .addCase(deleteBook.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        bookers: state.bookers.filter((book) => book.item_id !== action.payload),
      }));
  },
});

export const { adding, removes } = booksSlice.actions;
export default booksSlice.reducer;
