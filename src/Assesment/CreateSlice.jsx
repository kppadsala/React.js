import { createSlice } from '@reduxjs/toolkit';

export const checklistSlice = createSlice({
  name: 'checklist',
  initialState: [],
  reducers: {
    toggleOption: (state, action) => {
      const index = state.findIndex(option => option === action.payload);
      if (index === -1) {
        state.push(action.payload);
      } else {
        state.splice(index, 1);
      }
    },
  },
});

export const { toggleOption } = checklistSlice.actions;
export default checklistSlice.reducer;
