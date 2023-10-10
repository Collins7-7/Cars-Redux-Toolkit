import { configureStore } from "@reduxjs/toolkit";
import {
  carsReducer,
  addSearchTerm,
  addCar,
  removeCar,
} from "./slices/carsSlice";
import { formReducer, addName, addCost } from "./slices/formSlice";

const store = configureStore({
  reducer: {
    cars: carsReducer,
    form: formReducer,
  },
});

export { store, addSearchTerm, addCar, removeCar, addName, addCost };
