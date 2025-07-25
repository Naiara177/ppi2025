import { useNavigate } from "react-router-dom";

export function Cart({ cart, updateQuantity, removeItem, clearCart }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const navigate = useNavigate();

  return (
    <div style={{ padding: "2rem", backgroundColor: "#fff", margin: "2rem auto", maxWidth: "900px", borderRadius: "1rem", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2>🛒 Produtos no Carrinho</h2>
        <button
          onClick={() => navigate("/")}
          style={{ backgroundColor: "#007bff", color: "white", padding: "0.5rem 1rem", border: "none", borderRadius: "0.5rem" }}
        >
          ← Voltar para a Página Inicial
        </button>
      </div>

      {cart.length === 0 ? (
        <p style={{ padding: "2rem 0" }}>Seu carrinho está vazio.</p>
      ) : (
        <>
          <button
            onClick={clearCart}
            style={{ float: "right", backgroundColor: "#d32f2f", color: "white", padding: "0.5rem 1rem", border: "none", borderRadius: "0.5rem", marginBottom: "1rem" }}
          >
            🗑️ Remover todos os produtos
          </button>

          {cart.map((item) => (
            <div key={item.id} style={{ display: "flex", alignItems: "center", margin: "2rem 0", borderBottom: "1px solid #eee", paddingBottom: "1rem" }}>
              <img src={item.thumbnail} alt={item.title} style={{ width: "100px", height: "100px", objectFit: "cover", marginRight: "1rem" }} />
              <div style={{ flex: 1 }}>
                <h3>{item.title}</h3>
                <p>{item.description.slice(0, 60)}...</p>
                <p><strong>PIX:</strong> R$ {item.price.toFixed(2)}</p>
                <p><strong>Total:</strong> R$ {(item.price * item.quantity).toFixed(2)}</p>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                <span style={{ padding: "0 0.5rem" }}>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                <button
                  onClick={() => removeItem(item.id)}
                  style={{ marginLeft: "1rem", backgroundColor: "red", color: "white", padding: "0.3rem 0.8rem", border: "none", borderRadius: "0.5rem" }}
                >
                  Remover
                </button>
              </div>
            </div>
          ))}
          <h3 style={{ textAlign: "right" }}>💰 Total geral: R$ {total.toFixed(2)}</h3>
        </>
      )}
    </div>
  );
}
