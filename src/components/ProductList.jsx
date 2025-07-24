import React, { useState, useEffect } from "react";
import styles from "./ProductList.module.css";
import { Product } from "./Product";

export function ProductList({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className={styles.container}>
        <p>Carregando produtos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.container}>
        <p>Erro ao carregar produtos: {error.message}</p>
      </div>
    );
  }

  return (
    <div className={styles.productGrid}>
      {products.map((product) => (
        <Product
          key={product.id}
          image={product.thumbnail}
          title={product.title}
          description={product.description}
          price={product.price}
          onAddToCart={() => addToCart(product)}
        />
      ))}
    </div>
  );
}
