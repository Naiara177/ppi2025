import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import '../styles/shop.css';

export default function Shop({ products, search, onAddToCart }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [localSearch, setLocalSearch] = useState(search);

  const filtered = localSearch 
    ? products.filter(p => 
        p.name.toLowerCase().includes(localSearch.toLowerCase()) ||
        p.description.toLowerCase().includes(localSearch.toLowerCase())
      ) 
    : products;

  return (
    <div className="container">
      <h1>Produtos em Destaque</h1>
      <input 
        type="search" 
        placeholder="Pesquisar produtos..." 
        value={localSearch} 
        onChange={(e) => setLocalSearch(e.target.value)} 
        className="search-input" 
      />
      <div className="products-scroll">
        {filtered.length > 0 ? (
          filtered.map(p => (
            <ProductCard 
              key={p.id} 
              product={p} 
              onClick={() => setSelectedProduct(p)} 
            />
          ))
        ) : (
          <p style={{ color: 'var(--text-muted)', textAlign: 'center', width: '100%' }}>Nenhum produto encontrado</p>
        )}
      </div>
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
          onAdd={onAddToCart} 
        />
      )}
    </div>
  );
}
