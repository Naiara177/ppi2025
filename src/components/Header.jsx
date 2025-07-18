import "./styles/global.css";
import { useState } from "react";
import { Header } from "./components/Header";
import { ProductList } from "./components/ProductList";

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <Header quantidade={cartItems.length} />
      <ProductList setCartItems={setCartItems} cartItems={cartItems} />
    </>
  );
}
