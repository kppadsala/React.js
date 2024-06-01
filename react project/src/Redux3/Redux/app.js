// Config Store

import { configureStore } from "@reduxjs/toolkit";
import createSlice from "./createSlice";
import amountSlice from "./amountSlice";

export let store = configureStore({
  reducer: {
    createSlice: createSlice,
    amountSlice:amountSlice
  },
});
