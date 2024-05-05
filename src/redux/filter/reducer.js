import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    brandFilter: "",
    priceFilter: "",
    mileageFilter: "",
  },
  reducers: {
    setBrandFiltered(state, action) {
      state.brandFilter = action.payload;
    },
    setPriceFiltered(state, action) {
      state.priceFilter = action.payload;
    },
    setMileageFiltered(state, action) {
      state.mileageFilter = action.payload;
    },
  },
});

export const { setBrandFiltered, setPriceFiltered, setMileageFiltered } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
