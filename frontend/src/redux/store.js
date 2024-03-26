import { configureStore } from "@reduxjs/toolkit";
import sharedReducer from "./reducers/sharedReducer";

export const store = configureStore({
  reducer: {
    shared: sharedReducer,
  },
});
