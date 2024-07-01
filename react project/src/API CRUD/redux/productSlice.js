import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getproduct=createAsyncThunk("fatchproduct",()=>{
    console.log("=-=-=-=log=-=-=");
    return axios.get(" http://localhost:9999/product/getAll").then((res) => {
        console.log("🚀 ~ file: productSlice.js:5 ~ returnaxios.get ~ res:", res.data);
        return res.data;
    })
})

const productSlice=createSlice({
    name:"product",
initialState:{product:[], pending:false ,error:""}, 
reducers:{},
extraReducers:(bulider)=>{
    bulider
    .addCase(getproduct.fulfilled,(state,action) => {
        console.log("fulfilled:")
        console.log("🚀 ~ file: productSlice.js:19 ~ .addCase ~ action:", action.payload)
      state.product=action.payload
      state.pending=false
    })
    .addCase(getproduct.pending,(state,action)=>{
        console.log("pending");
      state.product=action.payload
      state.pending=true


    })
    .addCase(getproduct.rejected,(state,action)=>{
        console.log("======action======",action.error.message);
        console.log("rejected");
      state.product=action.error.message
      state.pending=false

    })
},
});
export default productSlice.reducer;
// export const {}