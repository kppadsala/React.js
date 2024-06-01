import { createSlice } from "@reduxjs/toolkit";

const amountSlice=createSlice({
name:"amount",
initialState:{amount:0},
reducers:{
incrementAmount:((state,action)=>{
state.amount++
}),
decrementAmount:((state,action)=>{
    state.amount--

})
}
})
export default amountSlice.reducer;
export const {incrementAmount,decrementAmount} = amountSlice.actions