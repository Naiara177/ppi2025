import React from "react";
import { Link } from "react-router-dom";

export function MyHeader({ cart }) {
  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  return (
    <header style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "2rem 2rem",
      background: "linear-gradient(to right, #4a2867ff, #bb8ce5)",
      borderBottom: "4px solid rgb(147, 96, 205)",
      fontFamily: "'Segoe UI', sans-serif"
    }}>
      <Link to="/" style={{ textDecoration: "none", color: "#361b4dff", fontWeight: "bold", fontSize: "20.0rem" }}>
        TJA Variedades
      </Link>
      <Link to="/cart" style={{ textDecoration: "none", color: "#361b4dff", fontSize: "13rem", display: "flex", alignItems: "center", gap: 8 }}>
        <span role="img" aria-label="carrinho">🛒</span>
        <span style={{ fontWeight: "bold", fontSize: "7rem" }}>{totalItems}</span>
      </Link>
    </header>
  );
}
