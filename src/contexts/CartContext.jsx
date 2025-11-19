import React, { createContext, useState, useEffect } from 'react';
import { supabase } from '../../supabase';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getSession();
      setUser(data.session?.user || null);
      if (data.session?.user) {
        loadCart(data.session.user.id);
      } else {
        loadLocalCart();
      }
    };
    checkUser();
  }, []);

  const loadCart = async (userId) => {
    const { data } = await supabase
      .from('cart')
      .select('*')
      .eq('user_id', userId);
    setCart(data || []);
  };

  const loadLocalCart = () => {
    const local = localStorage.getItem('cart');
    setCart(local ? JSON.parse(local) : []);
  };

  const addItem = async (product) => {
    const existing = cart.find(item => item.id === product.id);
    let updated;
    
    if (existing) {
      updated = cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updated = [...cart, { ...product, quantity: 1 }];
    }
    
    setCart(updated);
    if (user) {
      await supabase.from('cart').upsert({
        user_id: user.id,
        product_id: product.id,
        quantity: existing ? existing.quantity + 1 : 1
      });
    } else {
      localStorage.setItem('cart', JSON.stringify(updated));
    }
  };

  const removeItem = async (productId) => {
    const updated = cart.filter(item => item.id !== productId);
    setCart(updated);
    if (user) {
      await supabase.from('cart').delete().eq('product_id', productId).eq('user_id', user.id);
    } else {
      localStorage.setItem('cart', JSON.stringify(updated));
    }
  };

  const updateQuantity = async (productId, quantity) => {
    const updated = cart.map(item =>
      item.id === productId ? { ...item, quantity: Math.max(0, quantity) } : item
    ).filter(item => item.quantity > 0);
    
    setCart(updated);
    if (user) {
      if (quantity > 0) {
        await supabase.from('cart').update({ quantity }).eq('product_id', productId).eq('user_id', user.id);
      } else {
        await supabase.from('cart').delete().eq('product_id', productId).eq('user_id', user.id);
      }
    } else {
      localStorage.setItem('cart', JSON.stringify(updated));
    }
  };

  const clearCart = async () => {
    setCart([]);
    if (user) {
      await supabase.from('cart').delete().eq('user_id', user.id);
    } else {
      localStorage.removeItem('cart');
    }
  };

  const calcularTotal = () => cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const filtrarPorCategoria = (categoria) =>
    cart.filter(item => item.category === categoria);

  const ordenar = (prop, order = 'c') => {
    const sorted = [...cart].sort((a, b) => {
      if (prop === 'nome') {
        return a.name.localeCompare(b.name);
      } else if (prop === 'preco') {
        return a.price - b.price;
      }
      return 0;
    });
    return order === 'd' ? sorted.reverse() : sorted;
  };

  return (
    <CartContext.Provider value={{
      cart,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      calcularTotal,
      filtrarPorCategoria,
      ordenar
    }}>
      {children}
    </CartContext.Provider>
  );
}
