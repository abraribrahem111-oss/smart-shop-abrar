import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Products from "./Pages/ProductsPage";
import ProductPage from "./Pages/ProductPage";
import Cart from "./Pages/Cart";
import Login from "./Pages/LogIn";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />

        <Route
          path="/product/:id"
          element={<ProductPage />}
        />

        <Route path="/cart" element={<Cart />} />

        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;