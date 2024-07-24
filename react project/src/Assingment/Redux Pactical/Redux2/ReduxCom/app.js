import { configureStore } from "@reduxjs/toolkit";
import createslice from "./createslice";

export const store=configureStore({
reducer:{
    createslice:createslice
}
})