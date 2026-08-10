```jsx
import React from "react";
import "./App.css";

function App() {
  const handleGetStarted = () => {
    alert("Welcome to Paradise Nursery!");
  };

  return (
    <div className="App">
      <div className="landing-page">
        <h1>Paradise Nursery</h1>

        <p>
          Bring nature closer to your home with our beautiful collection of
          plants.
        </p>

        <button onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
```
