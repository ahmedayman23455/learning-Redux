import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = {
  items: [],
  showCart: false,
  numberOfItems: 0,
  changed: false,
};
const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    replaceCart(state, action) {
      state.items = action.payload.items;
      state.numberOfItems = action.payload.numberOfItems;
    },

    toggleCart(state) {
      state.showCart = !state.showCart;
    },

    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.totalPrice = existingItem.totalPrice + existingItem.price;
        existingItem.quantity = existingItem.quantity + 1;
      } else {
        state.items.push({
          ...newItem,
          totalPrice: newItem.price,
          quantity: 1,
        });
      }
      state.numberOfItems += 1;
      state.changed = true;
    },

    removeItem(state, action) {
      const newItemId = action.payload;
      const existingItem = state.items.find((item) => item.id === newItemId);

      if (existingItem.quantity > 1) {
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
        existingItem.quantity = existingItem.quantity - 1;
      } else {
        state.items = state.items.filter((item) => item.id !== newItemId);
      }
      state.numberOfItems -= 1;
      state.changed = true;
    },
  },
});

export const cartSliceActions = cartSlice.actions;
export default cartSlice.reducer;
