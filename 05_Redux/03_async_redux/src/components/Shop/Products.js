import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const products = [
  {
    id: 1,
    title: "Helmet",
    price: 6,
    description: "Amazing product description for sale",
  },
  {
    id: 2,
    title: "Bike",
    price: 120,
    description: "Amazing product description for sale",
  },
  {
    id: 3,
    title: "Wheel",
    price: 15,
    description: "Amazing product description for sale",
  },
  {
    id: 4,
    title: "Frame",
    price: 70,
    description: "Amazing product description for sale",
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((item) => (
          <ProductItem key={item.id} {...item} />
        ))}
      </ul>
    </section>
  );
};

export default Products;
