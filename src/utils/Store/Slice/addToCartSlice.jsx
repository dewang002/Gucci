import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("cartItems")) || [];
const addToCartSlice = createSlice({
  name: "addToCart",
  initialState: {
    item: initialState.filter((item) => item && Object.keys(item).length > 0),
    price: 0,
  },
  reducers: {
    addItem: (state, action) => {
      if (action.payload && Object.keys(action.payload).length > 0) {
        const existingItemIndex = state.item.findIndex(
          (item) => item.productCode === action.payload.productCode
        );
        if (existingItemIndex >= 0) {
          // If the item exists, increase the quantity
          state.item[existingItemIndex].quantity += 1;
        } else {
          // Otherwise, add the item with a quantity of 1
          state.item.push({ ...action.payload, quantity: 1 });
        }
        localStorage.setItem("cartItems", JSON.stringify(state.item));
      }
    },
    removeItem: (state, action) => {
      let ID = action.payload;
      const existingItemIndex = state.item.findIndex(
        (item) => item.productCode === ID
      );
      if (state.item[existingItemIndex].quantity > 1) {
        state.item[existingItemIndex].quantity -= 1;
      } else {
        state.item.splice(existingItemIndex, 1);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.item));
    },
    deleteItem: (state, action) => {
      state.item = state.item.filter(
        (elem) => elem.productCode !== action.payload
      );
      localStorage.setItem("cartItems", JSON.stringify(state.item));
    },
  },
});

export const { addItem, removeItem, deleteItem } = addToCartSlice.actions;
export default addToCartSlice.reducer;
