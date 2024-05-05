import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAddCar, fetchDeleteCar, fetchGetCars } from '../../services/db';

export const getCars = createAsyncThunk(
  'cars/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchGetCars();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addCar = createAsyncThunk(
  'cars/addCar',
  async (car, { rejectWithValue }) => {
    try {
      const data = await fetchAddCar(car);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteCar = createAsyncThunk(
  'cars/deleteCar',
  async (id, { rejectWithValue }) => {
    try {
      await fetchDeleteCar(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);