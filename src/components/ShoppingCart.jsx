import styles from "./styles/Cart.module.css";

export function Cart({ cart, updateQuantity, clearCart }) {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className={styles.cart}>
      <h1>Seu Carrinho</h1>
      <ul>
        {cart.map(item => (
          <li key={item.id} className={styles.item}>
            <img src={item.thumbnail} alt={item.title} />
            <div>
              <h3>{item.title}</h3>
              <p>R$ {item.price}</p>
              <div className={styles.controls}>
                <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <p className={styles.total}>Total: R$ {total.toFixed(2)}</p>
      <button className={styles.clear} onClick={clearCart}>🗑️ Limpar Carrinho</button>
    </div>
  );
}
