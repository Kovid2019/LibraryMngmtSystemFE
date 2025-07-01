import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import bookReducer from "../features/book/bookSlice";
import cartReducer from "../features/cart/cartSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
const cartPersistConfig = {
  key: "cart", //Name of the key you want to use to store in localStorage or sessionStorage
  storage, //Local storage of the browser.
};

//We need to use combineReducers because, only the cartInfo part of the reducer need to persist, rest of the reducers, no need to persist.
const rootReducer = combineReducers({
  userInfo: userReducer, //No need to persist
  bookInfo: bookReducer, //No need to persist
  cartInfo: persistReducer(cartPersistConfig, cartReducer), //Should persist
});

// export default configureStore({
//   // configureStore is a function that creates a Redux store instance
//   reducer: rootReducer,
// });
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ serializableCheck: false });
  },
});
export const persistor = persistStore(store);
export default store;
