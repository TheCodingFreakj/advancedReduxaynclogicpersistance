import "./style.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";
const CartItem = (props) => {
  const { title, quantity, total, price, id } = props.item;
  const dispatch = useDispatch();
  const removeitemhandler = () => {
    dispatch(cartActions.removeitemFromCart(id));
  };
  const additemhandler = () => {
    dispatch(cartActions.additemToCart({ id, title, price }));
  };
  return (
    <li className="item">
      <header>
        <h3>{title}</h3>
        <div className="price">
          ${total.toFixed(2)}{" "}
          <span className="itemprice">(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className="details">
        <div className="quantity">
          x <span>{quantity}</span>
        </div>
        <div className="actions">
          <button onClick={removeitemhandler}>-</button>
          <button onClick={additemhandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
