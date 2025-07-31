import { Link } from "react-router-dom";
import { useState } from "react";

export function Header({ cart, onSearch }) {
  const [searchText, setSearchText] = useState("");
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  function handleSearch() {
    if (onSearch) {
      onSearch(searchText);
    }
  }

  function clearSearch() {
    setSearchText("");
    if (onSearch) {
      onSearch("");
    }
  }

  return (
    <header style={{
      backgroundColor: "#2a7070ff",
      padding: "1rem",
      color: "white",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "1rem"
    }}>
      <h1 style={{ margin: 0 }}>TJA MEGASTONE</h1>

      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <input
          type="text"
          placeholder="Buscar produtos..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={{
            padding: "0.5rem",
            borderRadius: "0.5rem",
            border: "1px solid #ccc",
            fontSize: "1rem"
          }}
        />
        <button onClick={handleSearch} style={{
          backgroundColor: "#ffffff",
          color: "#2a7070ff",
          padding: "0.5rem 1rem",
          borderRadius: "0.5rem",
          border: "none",
          fontWeight: "bold",
          cursor: "pointer"
        }}>
          Pesquisar
        </button>
        <button onClick={clearSearch} style={{
          backgroundColor: "#ffc107",
          color: "#000",
          padding: "0.5rem 1rem",
          borderRadius: "0.5rem",
          border: "none",
          fontWeight: "bold",
          cursor: "pointer"
        }}>
          CLEAR
        </button>
      </div>

      <div style={{ textAlign: "right" }}>
        <p style={{ margin: "0.2rem 0" }}>Itens no carrinho: {totalItems}</p>
        <Link to="/cart" style={{
          backgroundColor: "#ffc107",
          padding: "0.5rem 1rem",
          borderRadius: "0.5rem",
          textDecoration: "none",
          color: "#000",
          fontWeight: "bold"
        }}>
          Ver Carrinho
        </Link>
      </div>
    </header>
  );
}
