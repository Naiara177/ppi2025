// src/App.jsx
import { ProductList } from "./components/ProductList";

export default function App() {
  return (
    <>

    
      <div
        style={{
          background: "linear-gradient(to right, #d8b5f6, #bb8ce5)",
          padding: "2rem 0",
          textAlign: "center",
          borderBottom: "4px solid rgb(147, 96, 205)",
          fontFamily: "'Segoe UI', sans-serif",
          color: "#3a006e",
        }}
      >
        <h1 style={{ fontSize: "2.4rem", margin: 0 }}>TJA Megastore</h1>
      </div>

      <ProductList />
    </>
    
  );
}
