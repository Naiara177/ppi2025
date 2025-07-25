export function Cart({ cart, updateQuantity, clearCart }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
      <h2>Carrinho de Compras 🛒</h2>
      {cart.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {cart.map((item) => (
              <li key={item.id} style={{ marginBottom: "1rem", borderBottom: "1px solid #ddd", paddingBottom: "0.5rem" }}>
                <strong>{item.title}</strong> — R$ {item.price.toFixed(2)} x {item.quantity}
                <div style={{ marginTop: "0.5rem" }}>
                  <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                </div>
              </li>
            ))}
          </ul>
          <p><strong>Total:</strong> R$ {total.toFixed(2)}</p>
          <button onClick={clearCart} style={{ marginTop: "1rem", backgroundColor: "#d9534f", color: "#fff", border: "none", padding: "0.5rem 1rem" }}>
            Remover tudo
          </button>
        </>
      )}
    </div>
  );
}
