// CreateSlice

import { createSlice } from "@reduxjs/toolkit";

const CountSlice = createSlice({
  name: "count",
  initialState: { count: [] },
  reducers: {
    addTask: (state, action) => {
      console.log("🚀 ~ action==>", action.payload);
      console.log("Action Called");
      state.count.push(action.payload);
    },
    deleteTask: (state, action) => {
      console.log("🚀 ~ actionDelete:", action.payload);
      let filterData = state.count.filter((e, i) => i !== action.payload);
      state.count = filterData;
    },
    updateTask:(state,action) => {
      console.log("🚀 ~ file: createSlice.js:20 ~ action:", action.payload)
      state.count.splice(action.payload.index,1,action.payload.newData)
      }
   
  },
});

export default CountSlice.reducer;
export const { addTask, deleteTask,updateTask } = CountSlice.actions;
