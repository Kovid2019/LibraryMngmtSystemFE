import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [], //For admin purpose
  publicBooks: [],
  selectedBook: {},
};
const bookSlice = createSlice({
  // createSlice is a function that creates a slice object
  name: "book", // name is a property of the slice object that defines the name of the slice and book is the name of the slice
  initialState, // initialState is a property of the slice object that defines the initial state of the slice
  reducers: {
    // reducers(which itself is an object) is a property of the slice object that defines the "reducers" of the slice.
    setBook: (state, action) => {
      // setbook is a "property of the reducers object" that defines a reducer
      state.books = action.payload; // state is the current state of the slice and action is the action object that is dispatched
    },
    setPublicBooks: (state, action) => {
      //setPublicBooks is another property like setBook that defines a reducer to set public books.
      state.publicBooks = action.payload;
    },
    setSelectedBook: (state, action) => {
      state.selectedBook = action.payload || {};
    },
  },
});
const { reducer, actions } = bookSlice; // reducer is a property of the slice object that defines the reducer of the slice and actions is a property of the slice object that defines the actions of the slice
export const { setBook, setPublicBooks, setSelectedBook } = actions; // actions are exported
export default reducer; // reducer is exported
