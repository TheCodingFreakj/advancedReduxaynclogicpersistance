import Cart from "./components/Cart/Cart";
import React from "react";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { Notification } from "./components/UI/Notification";
import { sendCartdata, fetchCartdata } from "./store/cart-slice";
let isInitial = true;
function App() {
  const dispatch = useDispatch();
  const showcart = useSelector((state) => state.ui.cartisVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  console.log(notification);
  React.useEffect(() => {
      dispatch(fetchCartdata());

  }, []);
  //when we fetch the cart data we replace the cart store with backend data and
  //this changes the cart.
  //as cart is changed this useEffect which posts rhe data us triggerd again
  ///this sends the cart data
  React.useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendCartdata(cart));
    }
  }, [cart]);
  return (
    <React.Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showcart && <Cart />}

        <Products />
      </Layout>
    </React.Fragment>
  );
}

export default App;
