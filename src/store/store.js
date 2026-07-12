import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialWeatherState = {
  city: "",
  country: "",
  time: "",
  data: [],
};

const weatherSlice = createSlice({
  name: "weather",
  initialState: initialWeatherState,
  reducers: {
    addCity(state, action) {
      state.city = action.payload;
    },
    addCountry(state, action) {
      state.country = action.payload;
    },
    addTime(state, action) {
      state.time = action.payload;
    },
    addWeatherData(state, action) {
      state.data = action.payload;
    },
  },
});

const errorSlice = createSlice({
  name: "error",
  initialState: { error: false, message: "" },
  reducers: {
    setError(state, action) {
      return {
        error: action.payload.error,
        message: action.payload.message,
      };
    },
  },
});

const store = configureStore({
  reducer: {
    weather: weatherSlice.reducer,
    error: errorSlice.reducer,
  },
});

export const weatherActions = weatherSlice.actions;
export const errorActions = errorSlice.actions;
export default store;
