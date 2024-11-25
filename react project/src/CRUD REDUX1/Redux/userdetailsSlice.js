// import {
//   createAsyncThunk,
//   createSlice,
//   isRejectedWithValue,
// } from "@reduxjs/toolkit";
// import { json } from "react-router-dom";

// export const createUser = createAsyncThunk(
//   "createUserData",
//   async (data, { rejectedWithValue }) => {
//     const response = await fetch(
//       "https://66b9e77bfa763ff550fa0ca0.mockapi.io/crud",
//       {
//         method: "POST",
//         headers: {
//           "content-Type": "application/json",
//         },
//         body: json.stringfy(data),
//       }
//     );
//     try {
//       const result = await response.json();
//       return result;
//     } catch (error) {
//       return rejectedWithValue(error.response);
//     }
//   }
// );

// const crudSlice = createSlice({
//   name: "userDetails",

//   initialState: {
//     users: [],
//     loading: false,
//     error: null,
//   }  ,
//   reducers:{},
//   extraReducers: (builder) => {
//     builder
//       .addCase(createUser.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(createUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.user.push(action.payload);
//       })
//       .addCase(createUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload.message;
//       });
//   },
// });
// export default crudSlice.reducer;
import {
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";

export const createUser = createAsyncThunk(
  "createUserData",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://66b9e77bfa763ff550fa0ca0.mockapi.io/crud",
        {
          method: "POST",
          headers: {
            "content-Type": "application/json",
          },
          body: JSON.stringify(data), // Fixed typo here
        }
      );

      if (!response.ok) {
        throw new Error('Failed to create user');
      }

      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error.message); // Use rejectWithValue correctly
    }
  }
);

const crudSlice = createSlice({
  name: "userDetails",

  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload); // Corrected to state.users
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Fixed error handling
      });
  },
});

export default crudSlice.reducer;
