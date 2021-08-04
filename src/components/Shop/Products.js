import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    title: "My first book",
    price: 6,
    description: "the first book i ever wrote",
  },
  {
    id: "p2",
    title: "My second book",
    price: 5,
    description: "the second book i ever wrote",
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((book) => {
          return (
            <ProductItem
              key={book.id}
              id={book.id}
              title={book.title}
              price={book.price}
              description={book.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
