import React from 'react';
import '../styles/cart.css';

export default function Cart({ items, onRemove, onClear, total }) {
  if (items.length === 0) {
    return (
      <div className="container">
        <h1>Carrinho de Compras</h1>
        <p style={{ textAlign: 'center', fontSize: '16px', color: 'var(--text-muted)', padding: '40px 0' }}>
          Seu carrinho está vazio
        </p>
      </div>
    );
  }

  return (
    <div className="container cart-page">
      <h1>Carrinho de Compras</h1>
      <div className="cart-items">
        {items.map(item => (
          <div key={item.cartId} className="cart-item">
            <div className="cart-item-info">
              <h3>{item.name}</h3>
              <p>R$ {item.price.toFixed(2)}</p>
            </div>
            <button 
              className="btn btn-danger" 
              onClick={() => onRemove(item.cartId)}
              style={{ padding: '8px 16px', fontSize: '12px' }}
            >
              Remover
            </button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h2>Total: R$ {total.toFixed(2)}</h2>
      </div>
      <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
        <button className="btn btn-danger" onClick={onClear}>Limpar Carrinho</button>
        <button className="btn btn-primary">Finalizar Compra</button>
      </div>
    </div>
  );
}
