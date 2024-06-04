import { createSlice } from "@reduxjs/toolkit";

const ageSlice = createSlice({
  name: "age",
  initialState: { age: 0 },
  reducers: {
    incrementcount: (state, action) => {
      state.age++;
    },
    decrementcount: (state, action) => {
      state.age--;
    },
    reset: (state, action) => {
      state.age = 0;
    },
    multiplecount: (state, action) => {
      state.age = state.age * 15;
    },
    userInput: (state, action) => {
      state.age += +action.payload;
    },
  },
});

export default ageSlice.reducer;
export const {
  incrementcount,
  decrementcount,
  reset,
  multiplecount,
  userInput,
} = ageSlice.actions;
