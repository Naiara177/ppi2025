import { ProductList } from "./components/ProductList";

export default function App() {
  return (
    <>

    
      <div
        style={{
          background: "linear-gradient(to right, #4a2867ff, #bb8ce5)",
          padding: "2rem 0",
          textAlign: "center",
          borderBottom: "4px solid rgb(147, 96, 205)",
          fontFamily: "'Segoe UI', sans-serif",
          color: "#361b4dff",
        }}
      >
        <h1 style={{ fontSize: "2.4rem", margin: 0 }}>TJA Megastore</h1>
      </div>

      <ProductList />
    </>
    
  );
}