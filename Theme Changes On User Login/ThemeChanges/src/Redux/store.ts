// store.ts
import { configureStore } from "@reduxjs/toolkit";
import sessionReducer from "./sessionSlice"; // Import the session slice reducer

const store = configureStore({
  reducer: {
    session: sessionReducer, // Add session reducer to the store
  },
});

export default store;
