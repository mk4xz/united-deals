import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home-page";
import CartPage from "./pages/cart-page";
import ProductPage from "./pages/product-page";
import CategoriesPage from "./pages/categories-page";
import ZaraPage from "./pages/zara-page";
import SignUpPage from "./pages/sign-up-page";
import LogInPage from "./pages/log-in-page";
import VerifyCodePage from "./pages/verify-code-page";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="signup/verify" element={<VerifyCodePage />} />
        <Route path="login" element={<LogInPage />} />
        <Route path="categories" element={<CategoriesPage />} />
        <Route path="zara" element={<ZaraPage />} />
        <Route path="product/:id" element={<ProductPage />} />
        <Route path="Product/:id" element={<ProductPage />} />
      </Routes>
      <Toaster position="top-right" />
    </>
  );
}

export default App;
