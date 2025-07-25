import { useEffect, useState } from "react";
import { Product } from "./Product";
import CircularProgress from "@mui/material/CircularProgress";
import styles from "../styles/ProductList.module.css";

export function ProductList({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const category = "smartphones";
  const limit = 10;

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${category}?limit=${limit}`)
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <CircularProgress style={{ display: "block", margin: "2rem auto" }} />;
  if (error) return <p>Erro ao carregar produtos: {error.message}</p>;

  return (
    <div className={styles.container}>
      <div className={styles.productList}>
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}
