import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";



export let store = configureStore({
    reducer: {
          productSlice:productSlice

    },
  });