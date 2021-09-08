import ProductItem from "./ProductItem";
import "./style.css";

const DUMMYPRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "My fiest book",
    description: "This is a first product - amazing!",
  },
  {
    id: "p2",
    price: 5,
    title: "My second book",
    description: "This is a second product - amazing!",
  },
];

const Products = (props) => {
  return (
    <section className="products">
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMYPRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
