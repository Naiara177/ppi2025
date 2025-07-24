import "./styles/theme.css";
import "./styles/global.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ProductList } from "./components/ProductList";
import { MyHeader } from "./components/MyHeader";
import { Cart } from "./components/Cart";

export default function App() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart(prev =>
      prev.find(item => item.id === product.id)
        ? prev.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...prev, { ...product, quantity: 1 }]
    );
  }

  function updateQuantity(id, change) {
    setCart(prev =>
      prev
        .map(item => {
          if (item.id === id) {
            const qty = item.quantity + change;
            return qty > 0 ? { ...item, quantity: qty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <>
      <MyHeader cart={cart} />
      <Routes>
        <Route path="/" element={<ProductList addToCart={addToCart} />} />
        <Route path="/cart" element={
          <Cart
            cart={cart}
            updateQuantity={updateQuantity}
            clearCart={clearCart}
          />
        } />
      </Routes>
    </>
  );
}
