import "./styles/theme.css";
import "./styles/global.css";
import { ProductList } from "./components/ProductList";
import { Header } from "./components/Header";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Cart } from "./components/Cart";
import { CartProvider } from "./context/CartContext";
<<<<<<< HEAD
import { Login } from "./components/Login";
import { ToastContainer } from "react-toastify";
=======
import { SessionProvider } from "./context/SessionContext";
import { Login } from "./components/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
>>>>>>> fae4fa9 (Cooomiiit)
import { User } from "./components/User";

export default function App() {

  return (
    <>
      <ToastContainer />
<<<<<<< HEAD
      <CartProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signin" element={<Login value="signin" />} />
            <Route path="/register" element={<Login value="register" />} />
            <Route path="/user" element={<User />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
=======
      <BrowserRouter>
        <SessionProvider>
          <CartProvider>
            <Header />
            <Routes>
              <Route path="/" element={<ProductList />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/signin" element={<Login value="signin" />} />
              <Route path="/register" element={<Login value="register" />} />
              <Route path="/user" element={<User />} />
            </Routes>
          </CartProvider>
        </SessionProvider>
      </BrowserRouter>
>>>>>>> fae4fa9 (Cooomiiit)
    </>
  );
}