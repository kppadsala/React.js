import { createSlice } from "@reduxjs/toolkit";
const marksCouter = createSlice({
  name: "marks",
  initialState: { marks: 10 },
  reducers: {
    incrementCount: (state, action) => {
      state.marks++;
    },
    decrementCount: (state, action) => {
      state.marks--;
    },
    reset: (state, action) => {
      state.marks =0;
    },
  },
});
export default marksCouter.reducer;
export const { incrementCount, decrementCount,reset } = marksCouter.actions;
