import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "Cart",
  initialState: [],
  reducers: {
    addProductCart(state, action) {
      state.push(action.payload);
    },
    removeProductCart(state, action) {
      return state.filter((item) => item.id !== action.payload.id); // Corrected
    },
  },
});

export const {addProductCart,removeProductCart}= CartSlice.actions
export default CartSlice.reducer