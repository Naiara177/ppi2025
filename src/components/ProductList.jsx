// src/components/ProductList.jsx
import { useEffect, useState } from "react";
import { Product } from "./Product";
import styles from "./ProductList.module.css";
import { CircularProgress } from "@mui/material";

export function ProductList() {
  const category = "smartphones";
  const limit = 10;
  const apiUrl = `https://dummyjson.com/products/category/${category}?limit=${limit}&select=id,thumbnail,title,price,description`;

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [purchaseCompleted, setPurchaseCompleted] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setProducts(
          data.products.sort((a, b) => a.title.localeCompare(b.title))
        );
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  function handleAddToCart(id) {
    const item = products.find((p) => p.id === id);
    setCartItems((prev) => [...prev, item]);
    setPurchaseCompleted(false);
    console.log(`Adicionado: ${item.title}`);
  }

  function handleRemoveLastItem() {
    if (cartItems.length === 0) return;
    const removed = cartItems[cartItems.length - 1];
    setCartItems((prev) => prev.slice(0, -1));
    setPurchaseCompleted(false);
    console.log(`Removido: ${removed.title}`);
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleFinishPurchase() {
    if (cartItems.length === 0) return;
    setPurchaseCompleted(true);
    console.log("Compra finalizada!");
  }

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className={styles.container}>
      <h2>🛍️ Itens no carrinho: {cartItems.length}</h2>
      <p>💰 Sua compra deu o total de: <strong>R$ {total.toFixed(2)}</strong></p>

      <div style={{ marginBottom: "1rem" }}>
        <button
          onClick={handleRemoveLastItem}
          style={{
            marginRight: "1rem",
            padding: "0.75rem 1.5rem",
            fontSize: "1rem",
            borderRadius: "6px",
            backgroundColor: "#cc4444",
            color: "#fff",
            border: "none",
            cursor: "pointer"
          }}
        >
          Remover último item❌
        </button>

       

        <button
          onClick={handleFinishPurchase}
          style={{
            padding: "0.75rem 1.5rem",
            fontSize: "1rem",
            borderRadius: "6px",
            backgroundColor: "#00aa55",
            color: "#fff",
            border: "none",
            cursor: "pointer"
          }}
        >
          Finalizar sua compra✅
        </button>
      </div>

      {cartItems.length > 0 && (
        <div style={{ width: "100%", maxWidth: "600px", marginBottom: "2rem" }}>
          <h3>🧾 Produtos adicionados:</h3>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.title} — R$ {item.price.toFixed(2)}
              </li>
            ))}
          </ul>
        </div>
      )}

      {purchaseCompleted && (
        <div style={{ marginTop: "2rem", fontSize: "1.2rem", color: "#3a006e" }}>
          <strong>🎉 Compra realizada com sucesso!</strong>
          <p>💜 A equipe da <strong>TJA Megastore</strong> agradece sua preferência!</p>
        </div>
      )}

      {loading && (
        <div>
          <CircularProgress
            thickness={5}
            style={{ margin: "2rem auto", display: "block" }}
            sx={{ color: "#63108dff" }}
          />
          <p>Loading products...</p>
        </div>
      )}

      {error && <p>Error loading products: {error.message} ❌</p>}

      {products.map((product) => (
        <Product
          key={product.id}
          {...product}
          onAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
}
