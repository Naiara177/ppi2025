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
  const [showSummary, setShowSummary] = useState(false);
  const [warranty, setWarranty] = useState("none");

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setProducts(data.products.sort((a, b) => a.title.localeCompare(b.title)));
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
  }

  function handleRemoveItem(id) {
    const index = cartItems.findIndex((item) => item.id === id);
    if (index === -1) return;
    const updated = [...cartItems];
    updated.splice(index, 1);
    setCartItems(updated);
    setPurchaseCompleted(false);
  }

  function handleFinishPurchase() {
    if (cartItems.length === 0) return;
    setPurchaseCompleted(true);
    setShowSummary(false);
  }

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);
  const pixTotal = total * 0.9;
  const parcelado = total / 10;
  const garantia =
    warranty === "12m" ? total * 0.03 :
    warranty === "24m" ? total * 0.05 :
    0;
  const totalFinal = total + garantia;

  return (
    <div className={styles.container}>
      <button onClick={() => setShowSummary(true)} className={styles.cartButton}>
        🛒 Abrir seu carrinho
      </button>

      {showSummary && (
        <div className={styles.cartSummary}>
          <h2>Resumo da sua compra</h2>

          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.title} — R$ {item.price.toFixed(2)}
                <button
                  className={styles.removeButton}
                  onClick={() => handleRemoveItem(item.id)}
                >
                  ❌ Remover
                </button>
              </li>
            ))}
          </ul>

          <div className={styles.pricingDetails}>
            <p><strong>Total dos produtos:</strong> R$ {total.toFixed(2)}</p>
            <p><strong>Valor com PIX:</strong> R$ {pixTotal.toFixed(2)} <span style={{ color: "#00aa55" }}>(-10%)</span></p>
            <p><strong>Parcelado:</strong> 10x de R$ {parcelado.toFixed(2)} sem juros</p>

            <label htmlFor="warranty">Garantia estendida:</label>
            <select
              id="warranty"
              value={warranty}
              onChange={(e) => setWarranty(e.target.value)}
            >
              <option value="none">Sem garantia</option>
              <option value="12m">12 meses — R$ {(total * 0.03).toFixed(2)}</option>
              <option value="24m">24 meses — R$ {(total * 0.05).toFixed(2)}</option>
            </select>

            <p><strong>Total com garantia:</strong> R$ {totalFinal.toFixed(2)}</p>
          </div>

          <div className={styles.actions}>
            <button onClick={() => setShowSummary(false)}>🔙 Voltar</button>
            <button onClick={handleFinishPurchase}>✅ Finalizar compra</button>
          </div>
        </div>
      )}

      {purchaseCompleted && (
        <div className={styles.confirmation}>
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
          <p>Carregando produtos...</p>
        </div>
      )}

      {error && <p>Erro ao carregar: {error.message}</p>}

      <div className={styles.productGrid}>
        {products.map((product) => (
          <Product key={product.id} {...product} onAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
}
