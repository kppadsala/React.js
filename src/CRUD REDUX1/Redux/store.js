import { configureStore } from "@reduxjs/toolkit";
import userdetailsSlice from "./userdetailsSlice";

export const store =configureStore({
    reducer:{
        app:userdetailsSlice
    }
})