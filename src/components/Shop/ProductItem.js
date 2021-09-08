import Card from "../UI/Card";
import "./style.css";
import { cartActions } from "../../store/cart-slice";
import { useDispatch } from "react-redux";
const ProductItem = (props) => {
  const { title, price, description, id } = props;
  const dispatch = useDispatch();
  const addTocarthandler = () => {
    dispatch(cartActions.additemToCart({ id, title, price }));
  };

  return (
    <li className="item">
      <Card>
        <header>
          <h3>{title}</h3>
          <div className="price">${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className="actions">
          <button onClick={addTocarthandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
