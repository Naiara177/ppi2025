import "./styles/theme.css";
import "./styles/global.css";
import  "./components/ProductList";
import "./components/MyHeader";
import "react-router";
import "./components/Cart";
import  "./service/CartContext";
import  "./components/Login";
import "./components/Cadastrar";
import "./components/Adm";

export default function App() {

  return (
    <>
      {/*<CartProvider>
        <MyHeader />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartProvider>
      <Login />
      <Cadastrar />*/}
      <Adm />

    </>
  );
}