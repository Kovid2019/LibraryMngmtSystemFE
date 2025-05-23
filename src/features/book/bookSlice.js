import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
};
const bookSlice = createSlice({
  // createSlice is a function that creates a slice object
  name: "book", // name is a property of the slice object that defines the name of the slice and book is the name of the slice
  initialState, // initialState is a property of the slice object that defines the initial state of the slice
  reducers: {
    // reducers is a property of the slice object that defines the reducers of the slice
    setBook: (state, action) => {
      // setbook is a property of the reducers object that defines a reducer
      state.books = action.payload; // state is the current state of the slice and action is the action object that is dispatched
    },
  },
});
const { reducer, actions } = bookSlice; // reducer is a property of the slice object that defines the reducer of the slice and actions is a property of the slice object that defines the actions of the slice
export const { setBook } = actions; // actions are exported
export default reducer; // reducer is exported
