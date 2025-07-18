import styles from "./Product.module.css";
import { useState } from "react";

export function Product({ id, title, thumbnail, price, description }) {
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => setQuantity((q) => q + 1);
  const handleSubtract = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const subtotal = price * quantity;

  return (
    <div className={styles.productCard}>
      <img src={thumbnail} alt={title} className={styles.productImage} />
      <h2 className={styles.productTitle}>{title}</h2>
      <p className={styles.productDescription}>{description}</p>

      {/* Bloco com controle de quantidade */}
      <div className={styles.quantityControls}>
        <button onClick={handleSubtract}>➖</button>
        <span>{quantity}</span>
        <button onClick={handleAdd}>➕</button>
      </div>

      {/* Subtotal exibido */}
      <p className={styles.subtotal}>
        Subtotal: R$ {(price * quantity).toFixed(2)}
      </p>
    </div>
  );
}
