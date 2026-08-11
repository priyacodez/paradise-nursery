
import React from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="landing-page">

      <div className="landing-content">
        <h1>Paradise Nursery</h1>

        <p>
          Welcome to Paradise Nursery!
          <br />
          Discover beautiful plants for your home and garden.
        </p>

        <Link to="/products">
          <button className="get-started-button">
            Get Started
          </button>
        </Link>
      </div>

    </div>
  );
}

export default App;

