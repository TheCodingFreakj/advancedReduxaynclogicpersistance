import { createSlice } from "@reduxjs/toolkit";

const uislice = createSlice({
  name: "ui",
  initialState: { cartisVisible: false, notification: null },
  //wrote varuoys action that you want to handle
  reducers: {
    toggle(state) {
      state.cartisVisible = !state.cartisVisible;
    },

    showNotication(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uislice.actions;
export default uislice;
