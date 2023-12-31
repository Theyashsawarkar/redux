import { configureStore } from "@reduxjs/toolkit";
import slice from "./slices/Slice";

export const store = configureStore({
  reducer: {
    counter: slice,
  },
});
