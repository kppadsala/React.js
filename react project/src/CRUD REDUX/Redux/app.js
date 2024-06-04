// Config Store

import { configureStore } from "@reduxjs/toolkit";
import crudSlice from '../../CRUD REDUX/Redux/createSlice'
export const store=configureStore({
    reducer:{
        crudSlice:crudSlice
    }
})