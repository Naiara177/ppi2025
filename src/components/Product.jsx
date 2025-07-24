import React from "react";
import styles from "./Product.module.css";

export function Product({ image, title, description, price, onAddToCart }) {
  return (
    <div className={styles.productCard}>
      <img src={image} alt={title} className={styles.productImage} />
      <h3 className={styles.productTitle}>{title}</h3>
      <p className={styles.productDescription}>{description}</p>
      <p className={styles.productPrice}>R$ {price.toFixed(2)}</p>
      <button className={styles.addToCartButton} onClick={onAddToCart}>
        Adicionar ao carrinho
      </button>
    </div>
  );
}
