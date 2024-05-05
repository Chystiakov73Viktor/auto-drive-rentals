import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { addFavorite, removeFavorite } from "./operations";

const initialState = {
  favorites: [],
  error: null,
  islLoading: false,
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(addFavorite.fulfilled, (state, action) => {
        state.favorites = action.payload;
        state.islLoading = false;
      })
      .addCase(removeFavorite.fulfilled, (state, action) => {
        state.favorites = action.payload
        state.islLoading = false;
      })
      .addMatcher(isAnyOf(...getRequests("pending")), handlePending)
      .addMatcher(isAnyOf(...getRequests("fulfilled")), handleFulfilled)
      .addMatcher(isAnyOf(...getRequests("rejected")), handleRejected),
});

const carConfig = {
  key: "favorites",
  storage,
  whitelist: ["favorites"],
};

const handlePending = (state) => {
  state.islLoading = true;
  state.error = null;
};

const handleFulfilled = (state) => {
  state.islLoading = false;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.islLoading = false;
  state.error = action.payload;
};

const arrayRequests = [addFavorite, removeFavorite];

const getRequests = (type) => arrayRequests.map((action) => action[type]);

export const carsReducer = favoritesSlice.reducer;

export const favoritesReducer = persistReducer(
  carConfig,
  favoritesSlice.reducer
);
