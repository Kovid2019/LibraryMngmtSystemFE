import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import bookReducer from "../features/book/bookSlice";
export default configureStore({
  // configureStore is a function that creates a Redux store instance
  reducer: {
    // We can define  slice in the reducer object to create a store
    userInfo: userReducer, //We need to define userInfo slice and pass here.
    bookInfo: bookReducer, //We need to define bookInfo slice and pass here.
  },
});
