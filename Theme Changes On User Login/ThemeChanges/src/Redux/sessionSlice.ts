// sessionSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Session State Interface
interface SessionState {
  username: string | null;
}

const initialState: SessionState = {
  username: localStorage.getItem("user") || null, // Get username from localStorage or set to null
};

// Create the session slice
const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
      localStorage.setItem("user", action.payload); // Store in localStorage
    },
   
    clearSession: (state) => {
      state.username = null;
      localStorage.removeItem("user"); // Clear localStorage
    },
  },
});

export const { setUsername, clearSession } = sessionSlice.actions;
export default sessionSlice.reducer;
