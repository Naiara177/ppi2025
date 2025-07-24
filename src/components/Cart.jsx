import React from "react";
import "./ProductList.css";
import { useNavigate } from "react-router-dom";

export function Cart({ cart, updateQuantity, clearCart }) {
  const navigate = useNavigate();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="page">
        <header className="header">Carrinho de Compras</header>
        <div style={{ textAlign: "center", margin: "2rem 0" }}>
          <h2>Seu carrinho está vazio 🛒</h2>
          <button className="add-btn" onClick={clearCart} disabled>
            Limpar carrinho
          </button>
          <br />
          <button
            className="add-btn"
            style={{ marginTop: "1.5rem", backgroundColor: "#007bff" }}
            onClick={() => navigate("/")}
          >
            🔙 Voltar à loja
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <header className="header">Carrinho de Compras</header>
      <div className="product-grid">
        {cart.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt={item.name} className="product-img" />
            <h3 className="product-name">{item.name}</h3>
            <p className="product-price">Preço: R$ {item.price.toFixed(2)}</p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, margin: "0.5rem 0" }}>
              <button className="add-btn" onClick={() => updateQuantity(item.id, -1)}>-</button>
              <span style={{ minWidth: 24, textAlign: "center" }}>{item.quantity}</span>
              <button className="add-btn" onClick={() => updateQuantity(item.id, 1)}>+</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ textAlign: "center", margin: "2rem 0" }}>
        <h3>Total: R$ {total.toFixed(2)}</h3>
        <button className="add-btn" style={{ background: "#ff4444", marginRight: 12 }} onClick={clearCart}>
          Limpar carrinho
        </button>
        <button className="add-btn" style={{ background: "#00aa55", marginRight: 42 }}>
          Finalizar compra
        </button>
        <button
          className="add-btn"
          style={{ background: "#47525eff" }}
          onClick={() => navigate("/")}
        >
          🔙 Voltar à loja
        </button>
      </div>
    </div>
  );
}
