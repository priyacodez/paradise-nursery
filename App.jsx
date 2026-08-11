
import React, { useState } from "react";
import ProductList from "./ProductList";

function App() {
  const [showProductList, setShowProductList] = useState(false);

  return (
    <div>
      {!showProductList ? (
        <div className="landing-page">
          <h1>Paradise Nursery</h1>

          <p>Welcome to Paradise Nursery!</p>
          <p>Find beautiful plants for your home and garden.</p>

          <button onClick={() => setShowProductList(true)}>
            Get Started
          </button>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;

