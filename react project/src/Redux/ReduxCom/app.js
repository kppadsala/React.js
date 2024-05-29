//step-2 config store

import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './conterSlice'


export let store=configureStore({
    reducer:{
        counterSlice:counterSlice
    }
})