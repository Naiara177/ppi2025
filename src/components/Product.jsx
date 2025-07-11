// src/components/Product.jsx
import styles from "./Product.module.css";

export function Product({ id, title, thumbnail, price, description, onAddToCart }) {
  return (
    <div className={styles.productCard}>
      <img src={thumbnail} alt={title} className={styles.productImage} />
      <h2 className={styles.productTitle}>{title}</h2>
      <p className={styles.productPrice}>Price: ${price}</p>
      <p className={styles.productDescription}>{description}</p>
      <button
        className={styles.addToCartButton}
        onClick={() => onAddToCart(id)}
      >
        Adicionar ao carrinho 🛒
      </button>
    </div>
  );
}
