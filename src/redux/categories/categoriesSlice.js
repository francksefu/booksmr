import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  catList: [], status: 'Under construction',
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state, action) => {
      state.categories = action.payload === 'Under construction'
        ? 'Under construction'
        : state.categories;
    },
  },
});

export const { reducer } = categoriesSlice.actions;
export default categoriesSlice.reducer;
