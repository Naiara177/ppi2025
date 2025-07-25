import { Link } from "react-router-dom";

export function Header({ cart }) {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header style={{ backgroundColor: "#2a7070ff", padding: "1rem", color: "white", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <h1>TJA MEGASTONE</h1>
      <div>
        <p>Itens no carrinho: {totalItems}</p>
        <Link to="/cart" style={{ backgroundColor: "#ffc107", padding: "0.5rem 1rem", borderRadius: "0.5rem", textDecoration: "none", color: "#000" }}>
          Ver Carrinho
        </Link>
      </div>
    </header>
  );
}
