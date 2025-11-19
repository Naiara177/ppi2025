import React, { useState } from 'react';
import '../styles/modal.css';

export default function ProductModal({ product, onClose, onAdd }) {
  const [qty, setQty] = useState(1);

  const handleAdd = () => {
    onAdd(product, qty);
    onClose();
  };

  return (
    <div className="modal active" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p className="modal-price">R$ {product.price.toFixed(2)}</p>
        <div className="qty-control">
          <button onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
          <input 
            type="number" 
            value={qty} 
            onChange={(e) => setQty(Math.max(1, parseInt(e.target.value) || 1))} 
          />
          <button onClick={() => setQty(qty + 1)}>+</button>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button className="btn btn-primary" onClick={handleAdd}>Adicionar</button>
          <button className="btn btn-secondary" onClick={onClose}>Cancelar</button>
        </div>
      </div>
    </div>
  );
}
