import React from "react";
import ProductList from "../Components/product";

export default function Shop({ addToCart }) {
  return (
    <div>
      <h1 className="product-title">🛍 Shop All Products</h1>
      <ProductList addToCart={addToCart} />
    </div>
  );
}
