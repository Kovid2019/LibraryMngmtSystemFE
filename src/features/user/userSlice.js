import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};
const userSlice = createSlice({
  // createSlice is a function that creates a slice object
  name: "user", // name is a property of the slice object that defines the name of the slice and user is the name of the slice
  initialState, // initialState is a property of the slice object that defines the initial state of the slice
  reducers: {
    // reducers is a property of the slice object that defines the reducers of the slice
    setUser: (state, action) => {
      // setUser is a property of the reducers object that defines a reducer
      state.user = action.payload; // state is the current state of the slice and action is the action object that is dispatched
    },
  },
});
const { reducer, actions } = userSlice; // reducer is a property of the slice object that defines the reducer of the slice and actions is a property of the slice object that defines the actions of the slice
export const { setUser } = actions; // actions are exported
export default reducer; // reducer is exported
