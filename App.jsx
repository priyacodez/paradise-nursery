
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import AboutUs from "./AboutUs";
import ProductList from "./ProductList";
import Cart from "./Cart";
import "./App.css";

function Home() {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Welcome to Paradise Nursery</h1>

        <p>Bring nature into your home.</p>

        <p className="landing-description">
          Discover our beautiful collection of indoor and outdoor plants.
          Shop your favorite plants and bring a touch of greenery to your
          space.
        </p>

        <Link to="/plants">
          <button className="get-started-button">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/plants" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

