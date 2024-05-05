import { createAsyncThunk } from "@reduxjs/toolkit";

export const addFavorite = createAsyncThunk(
  "favorites/addFavorite",
  async (favorite, { getState }) => {
    const favorites = getState().favorites.favorites;
    const existingFavorite = favorites.find((fav) => fav.id === favorite.id);
    if (!existingFavorite) {
      return [...favorites, favorite];
    }
  }
);

export const removeFavorite = createAsyncThunk(
  "favorites/removeFavorite",
  async (id, { getState }) => {
    const data = getState().favorites.favorites;
    const favorites = data.filter((fav) => fav.id !== id);
    return favorites;
  }
);
