import React from 'react';
import '../styles/product-card.css';

export default function ProductCard({ product, onClick }) {
  return (
    <div className="product-card" onClick={onClick}>
      <div className="product-image">{product.image}</div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p className="price">${product.price.toFixed(2)}</p>
      <button className="btn-add-cart" onClick={(e) => { e.stopPropagation(); }}>ADD TO CART</button>
    </div>
  );
}
