import "./App.css";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute, RestrictedRoute } from "./auth/index";
import { Footer, Header } from "./components/index";
import {
  Login,
  Signup,
  Home,
  Products,
  Wishlist,
  Cart,
  PageNotFound,
  MockAPI,
} from "./pages/index";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route element={<RestrictedRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/mock-api" element={<MockAPI />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/products" element={<Products />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
        </Route>

        <Route path="/*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
