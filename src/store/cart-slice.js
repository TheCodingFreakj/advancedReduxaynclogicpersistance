import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";
import axios from "axios";
const cartslice = createSlice({
  name: "cart",
  initialState: { items: [], totalQuantity: 0, changed: false },
  //wrote varuoys action that you want to handle
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },

    additemToCart(state, action) {
      const newitem = action.payload;
      const existingItem = state.items.find((item) => item.id === newitem.id);
      state.totalQuantity++;
      state.changed = true;
      if (!existingItem) {
        state.items.push({
          id: newitem.id,
          price: newitem.price,
          quantity: 1,
          totalPrice: newitem.price,
          name: newitem.title,
        });
      } else {
        //add the quantuty and totalprice when add button is clicked twice or thruce
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newitem.price;
      }
    },
    removeitemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.changed = true;
      console.log(existingItem);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

// export const sendCartdata = async ({ items, totalQuantity }) => {

export const sendCartdata = (cart) => async (dispatch) => {
  dispatch(
    uiActions.showNotication({
      status: "pending",
      title: "sending data",
      message: "you are sending data",
    })
  );
  console.log("this is hitting 1");

  const sendDataReq = async () => {
    const response = await axios({
      method: "PUT",
      url: `https://nba-full-f7680.firebaseio.com/cart.json`,
      data: JSON.stringify({
        items: cart.items || [],
        totalQuantity: cart.totalQuantity,
      }),
    });
    // items: cart.items,
    //     totalQuantity: cart.totalQuantity,

    if (response.statusText !== "OK") {
      throw new Error("something went wrong");
    }

    console.log("this is hitting 2");
  };

  try {
    await sendDataReq();
    dispatch(
      uiActions.showNotication({
        status: "success",
        title: "sent data",
        message: "you have sent data",
      })
    );
  } catch (err) {
    dispatch(
      uiActions.showNotication({
        status: "error",
        title: "sending data failes",
        message: "you are not fetxhing data",
      })
    );
  }
};

export const fetchCartdata = (cart) => async (dispatch) => {

  const getDataReq = async () => {
    const response = await axios({
      method: "GET",
      url: `https://nba-full-f7680.firebaseio.com/cart.json`,
    });

    if (response.statusText !== "OK") {
      throw new Error("something went wrong");
    }

    return response;
  };

  try {
    const cartData = await getDataReq();
    dispatch(
      cartActions.replaceCart({
        items: cartData.items || [],
        totalQuantity: cartData.totalQuantity,
      })
    ); //replace the frontend with the data from backend
  } catch (err) {
    dispatch(
      uiActions.showNotication({
        status: "error",
        title: "sending data failes",
        message: "you are not fetching data",
      })
    );
  }
};

export const cartActions = cartslice.actions;
export default cartslice;
