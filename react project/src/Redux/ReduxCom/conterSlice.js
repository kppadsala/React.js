//step-1. Create Slice

import { createSlice } from "@reduxjs/toolkit"

const countSlice = createSlice({
    name:"count",
    initialState:{count:0},
    reducers:{
        incrementCount:(state,actions)=>{
            state.count++
        },
        decrementCount:(state,actions)=>{
            state.count = state.count*3
        },
    },
})

export default countSlice.reducer
export const {incrementCount,decrementCount} = countSlice.actions