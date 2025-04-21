import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Home from "./Pages/home";
import Shop from "./Pages/shop";
import Cart from "./Pages/cart";
import Navbar from "./Components/navbar";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <div>
      <Navbar
        cartItemCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={<Cart cartItems={cart} removeFromCart={removeFromCart} />}
        />
      </Routes>
    </div>
  );
}

export default App;
