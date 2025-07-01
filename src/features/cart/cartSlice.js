import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};
const cartSlice = createSlice({
  // createSlice is a function that creates a slice object
  name: "cart", // name is a property of the slice object that defines the name of the slice and cart is the name of the slice
  initialState, // initialState is a property of the slice object that defines the initial state of the slice
  reducers: {
    setCart: (state, { payload }) => {
      //TODO
      state.cart = [...state.cart, payload];
    },
    removeBookFromCart: (state, { payload }) => {
      //Filter out the book you want to remove

      state.cart = state.cart.filter((book) => book._id !== payload);
    },
  },
});
const { reducer, actions } = cartSlice; // reducer is a property of the slice object that defines the reducer of the slice and actions is a property of the slice object that defines the actions of the slice
export const { setCart, removeBookFromCart } = actions; // actions are exported
export default reducer; // reducer is exported
