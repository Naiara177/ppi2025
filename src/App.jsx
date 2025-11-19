import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import './styles/app.css';

const PRODUCTS = [
  { 
    id: 1, 
    name: 'iPhone 5s', 
    description: 'The iPhone 5s is a classic smartphone known for its compact design and advanced features during its release.',
    price: 199.99,
    category: 'iPhone',
    image: '📱'
  },
  { 
    id: 2, 
    name: 'iPhone 6', 
    description: 'The iPhone 6 is a stylish and capable smartphone with a larger display and improved performance.',
    price: 299.99,
    category: 'iPhone',
    image: '📱'
  },
  { 
    id: 3, 
    name: 'iPhone 13 Pro', 
    description: 'The iPhone 13 Pro is a cutting-edge smartphone with a powerful camera system and high-performance chip.',
    price: 1099.99,
    category: 'iPhone',
    image: '📱'
  },
  { 
    id: 4, 
    name: 'iPhone X', 
    description: 'The iPhone X is a flagship smartphone featuring a bezel-less OLED display and facial recognition technology.',
    price: 899.99,
    category: 'iPhone',
    image: '📱'
  },
  { 
    id: 5, 
    name: 'Oppo A57', 
    description: 'The Oppo A57 is a mid-range smartphone for its sleek design and capable features.',
    price: 249.99,
    category: 'Other',
    image: '📱'
  },
  { 
    id: 6, 
    name: 'Samsung Galaxy S21', 
    description: 'The Samsung Galaxy S21 features a high-refresh-rate display and advanced camera capabilities.',
    price: 799.99,
    category: 'Other',
    image: '📱'
  },
];

export default function App() {
  const [currentPage, setCurrentPage] = useState('shop');
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('cart')) || []);
  const [search, setSearch] = useState('');

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, quantity) => {
    const newItems = Array(quantity).fill(null).map(() => ({ 
      ...product, 
      cartId: `${product.id}-${Date.now()}-${Math.random()}` 
    }));
    setCart([...cart, ...newItems]);
  };

  const removeFromCart = (cartId) => {
    setCart(cart.filter(item => item.cartId !== cartId));
  };

  const clearCart = () => setCart([]);

  // Filtrar e ordenar produtos
  const filtrarPorCategoria = (categoria) => 
    PRODUCTS.filter(p => p.category === categoria);

  const ordenarPorPreco = (ordem = 'asc') => {
    const sorted = [...PRODUCTS].sort((a, b) => a.price - b.price);
    return ordem === 'desc' ? sorted.reverse() : sorted;
  };

  const calcularTotal = () => 
    cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header 
        cartCount={cart.length} 
        onCartClick={() => setCurrentPage('cart')} 
        onShopClick={() => setCurrentPage('shop')}
        search={search}
        onSearchChange={setSearch}
      />
      <main style={{ flex: 1, paddingTop: '24px', paddingBottom: '24px' }}>
        {currentPage === 'shop' && (
          <Shop 
            products={PRODUCTS}
            search={search}
            onAddToCart={addToCart}
          />
        )}
        {currentPage === 'cart' && (
          <Cart 
            items={cart}
            onRemove={removeFromCart}
            onClear={clearCart}
            total={calcularTotal()}
          />
        )}
      </main>
    </div>
  );
}

