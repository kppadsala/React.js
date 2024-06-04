import { createSlice } from "@reduxjs/toolkit";

const amountSlice = createSlice({
  name: "amount",
  initialState: { amount: 0 },
  reducers: {
    incrementamount: (state, action) => {
      state.amount++;
    },
    decrementamount: (state, action) => {
      state.amount--;
    },
    reset: (state, action) => {
      state.amount = 0;
    },
    multipleamount: (state, action) => {
      state.amount = state.amount*15;
    },
    
  },
  extraReducers:(builder)=>{
builder.addCase("age/userInput",(state,action)=>{
state.amount++;
})
  }
});
export default amountSlice.reducer;
export const { incrementamount, decrementamount, reset, multipleamount } =
  amountSlice.actions;
