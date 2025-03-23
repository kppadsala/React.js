import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartProductSlice"

const Store=configureStore({
    reducer:{
        cart : cartReducer
    }
})

export default Store;