import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',

  reducers: {
    filterContactsSliceAction: (state, { payload }) => {
          return (state = payload);
    },
  },
});

export const { filterContactsSliceAction } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
