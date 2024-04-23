import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    carFilter: '',
  },
  reducers: {
    setCarFiltered(state, action) {
      state.carFilter = action.payload;
    },
  },
});

export const { setCarFiltered } =
  filterSlice.actions;
export const filterReducer = filterSlice.reducer;