import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./reducers/slice";

export const store = configureStore({
  reducer: {
    modal: modalSlice,
  },
});
