import { createSlice } from '@reduxjs/toolkit';
import { filterInitialState } from './initialState';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilteredContacts: {
      reducer(state, action) {
        return (state = action.payload);
      },
    },
  },
});

export const { setFilteredContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
