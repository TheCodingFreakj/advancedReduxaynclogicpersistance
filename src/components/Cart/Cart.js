import Card from "../UI/Card";
import "./style.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
const Cart = (props) => {
  const cartitems = useSelector((state) => state.cart.items);
  return (
    <Card className="cart">
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartitems &&
          cartitems.map((item) => (
            <CartItem
              key={item.id}
              item={{
                id: item.id,
                title: item.name,
                quantity: item.quantity,
                total: item.totalPrice,
                price: item.price,
              }}
            />
          ))}
      </ul>
    </Card>
  );
};

export default Cart;
