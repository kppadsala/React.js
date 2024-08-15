// Config Store

import { configureStore } from "@reduxjs/toolkit";
import amountSlice from "./amountSlice";

export let  store=configureStore({
    reducer:{
        amountSlice:amountSlice
    }
})