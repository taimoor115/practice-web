import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      const itemToAdd = action.payload;
      const existingItem = state.items.find((item) => item.id === itemToAdd.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...itemToAdd, quantity: 1 });
      }
      return;
    },
    remove: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      return;
    },
    reduceQuantity: (state, action) => {
      const items = action.payload;
      const existingItem = state.items.find((item) => item.id === items.id);

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      }
    },
  },
});

export const { add, remove, reduceQuantity } = cartSlice.actions;
export default cartSlice.reducer;
