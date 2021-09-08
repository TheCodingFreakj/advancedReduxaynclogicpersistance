//https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware
//https://redux.js.org/tutorials/fundamentals/part-4-store#middleware

import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import uislice from "./ui-slice";
import cartslice from "./cart-slice";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));
const store = configureStore({
  composedEnhancer,
  reducer: { ui: uislice.reducer, cart: cartslice.reducer }, //reducer created by ui slice
});

export default store;
