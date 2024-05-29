//step-1. Create Slice

import { createSlice } from "@reduxjs/toolkit"

const countSlice = createSlice({
    name:"count",
    initialState:{count:0},
    reducers:{
        incrementCount:(state,actions)=>{
            state.count++
        },
    },
})

export default countSlice.reducer
export const {incrementCount} = countSlice.actions