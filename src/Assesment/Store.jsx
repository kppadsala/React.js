import { configureStore } from '@reduxjs/toolkit';
import checklistReducer from './checklistSlice';

export const store = configureStore({
  reducer: {
    checklist: checklistReducer,
  },
});
