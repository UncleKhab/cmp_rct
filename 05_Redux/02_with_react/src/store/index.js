import { createSlice, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import authReducer from "./authSlice";

//create a store
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

//export the store
export default store;
