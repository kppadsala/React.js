// Config Store

import { configureStore } from "@reduxjs/toolkit";
import CountSlice from '../Redux/userdetails'

export let  Store=configureStore({
    reducer:{
        CountSlice:CountSlice
    }
})
