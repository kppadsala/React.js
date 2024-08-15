import {
  createAsyncThunk,
  createSlice,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import { json } from "react-router-dom";

export const createUser = createAsyncThunk(
  "createUserData",
  async (data, { rejectedWithValue }) => {
    const response = await fetch(
      "https://66b9e77bfa763ff550fa0ca0.mockapi.io/crud",
      {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: json.stringfy(data),
      }
    );
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectedWithValue(error.response);
    }
  }
);

const crudSlice = createSlice({
  name: "userDetails",
  initialState: {
    users: [],
    loading: false,
    error: null,
    extraReducers:{
        [createUser.pending]:(state,action)=>{
            state.loading=true;
        }
    }
  },
});
export default crudSlice.reducer;
