import { createSlice } from "@reduxjs/toolkit";

const crudSlice = createSlice({
  name: "task",
  initialState: { task: [] },
  reducers: {
    addTask: (state, action) => {
      console.log("=======-=-=-=--=");
      state.task.push(action.payload);
    },
    deleteTask: (state, action) => {
        console.log("🚀 ~ file: createSlice.js:12 ~ action:", action)
        state.task.filter(item => item !== action.payload)
      state.task.push(action.payload);

    },
  },
});
export default crudSlice.reducer;
export const { addTask,deleteTask } = crudSlice.actions;
