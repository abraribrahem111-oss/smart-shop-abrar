import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Products from "./Pages/ProductsPage";
import ProductPage from "./Pages/ProductPage";
import Cart from "./Pages/Cart";
import LogIn from "./Pages/LogIn";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/products" element={<Products />} />

      <Route
        path="/product/:id"
        element={<ProductPage />}
      />

      <Route path="/cart" element={<Cart />} />

      <Route path="/login" element={<LogIn />} />
    </Routes>
  );
}

export default App;