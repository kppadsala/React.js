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
       let filterData=state.task.filter((e,i)=> i !== action.payload)

       state.task = filterData
      console.log("🚀 ~ file: createSlice.js:14 ~ filterData:", filterData)

    },
    updateTask:(state,action) => {
    console.log("🚀 ~ file: createSlice.js:20 ~ action:", action.payload)
    state.task.splice(action.payload.index,1,action.payload.newData)
    }
  },
});
export default crudSlice.reducer;
export const { addTask,deleteTask ,updateTask} = crudSlice.actions;
