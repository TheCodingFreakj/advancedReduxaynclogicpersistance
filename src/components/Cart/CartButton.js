import "./style.css";
import { uiActions } from "../../store/ui-slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const toggleCartButton = () => {
    //dispatch the cart toggling logihn
    dispatch(uiActions.toggle());
  };
  return (
    <button className="button" onClick={toggleCartButton}>
      <span>My Cart</span>
      <span className="badge">{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
