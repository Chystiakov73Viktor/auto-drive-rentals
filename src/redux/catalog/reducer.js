import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getCars, addCar, deleteCar } from './operations';

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    cars: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder =>
    builder
      .addCase(getCars.fulfilled, (state, action) => {
        state.cars = action.payload;
      })
      .addCase(addCar.fulfilled, (state, action) => {
        state.cars.push(action.payload);
      })
      .addCase(deleteCar.fulfilled, (state, action) => {
        state.cars = state.cars.filter(
          car => car.id !== action.payload.id
        );
      })
      .addMatcher(isAnyOf(...getRequests('pending')), handlePending)
      .addMatcher(isAnyOf(...getRequests('fulfilled')), handleFulfilled)
      .addMatcher(isAnyOf(...getRequests('rejected')), handleRejected),
});

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const arrayRequests = [getCars, addCar, deleteCar];

const getRequests = type => arrayRequests.map(action => action[type]);

export const carsReducer = carsSlice.reducer;