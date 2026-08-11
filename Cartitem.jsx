
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "./CartSlice";
import { Link } from "react-router-dom";

function CartItem() {
  const dispatch = useDispatch();

  // Get cart items from Redux
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate total quantity of all plants
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Calculate total price
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Increase quantity
  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id));
  };

  // Decrease quantity
  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };

  // Remove item from cart
  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  // Checkout
  const handleCheckout = () => {
    alert("Coming Soon!");
  };

  return (
    <div className="cart-page">

      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">
          🌿 Paradise Nursery
        </div>

        <div className="nav-links">
          <Link to="/">Home</Link>

          <Link to="/plants">
            Plants
          </Link>

          <Link to="/about">
            About Us
          </Link>

          <Link to="/cart" className="cart-link">
            🛒 Cart
            <span className="cart-count">
              {totalItems}
            </span>
          </Link>
        </div>
      </nav>

      {/* Cart Container */}
      <div className="cart-container">

        <h1>Shopping Cart</h1>

        {/* Empty Cart */}
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h2>Your Shopping Cart is Empty</h2>

            <p>
              You have not added any plants to your cart yet.
            </p>

            <Link to="/plants">
              <button className="continue-shopping-button">
                Continue Shopping
              </button>
            </Link>
          </div>
        ) : (
          <div className="cart-content">

            {/* Cart Items */}
            <div className="cart-items">

              {cartItems.map((item) => (
                <div className="cart-item" key={item.id}>

                  {/* Plant Image */}
                  <div className="cart-image-container">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-item-image"
                    />
                  </div>

                  {/* Plant Details */}
                  <div className="cart-item-details">

                    <h2>{item.name}</h2>

                    <p className="unit-price">
                      Unit Price: ₹{item.price}
                    </p>

                    {/* Quantity */}
                    <div className="quantity-section">
                      <span>Quantity:</span>

                      <div className="quantity-controls">

                        <button
                          type="button"
                          className="quantity-button"
                          onClick={() => handleDecrease(item.id)}
                          aria-label={`Decrease quantity of ${item.name}`}
                        >
                          −
                        </button>

                        <span className="quantity">
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          className="quantity-button"
                          onClick={() => handleIncrease(item.id)}
                          aria-label={`Increase quantity of ${item.name}`}
                        >
                          +
                        </button>

                      </div>
                    </div>

                    {/* Item Total */}
                    <p className="plant-total">
                      <strong>
                        Total: ₹{item.price * item.quantity}
                      </strong>
                    </p>

                    {/* Remove */}
                    <button
                      type="button"
                      className="delete-button"
                      onClick={() => handleRemove(item.id)}
                    >
                      🗑️ Delete
                    </button>

                  </div>
                </div>
              ))}

            </div>

            {/* Cart Summary */}
            <div className="cart-summary">

              <h2>Cart Summary</h2>

              <div className="summary-row">
                <span>Total Items:</span>
                <strong>{totalItems}</strong>
              </div>

              <div className="summary-row total-row">
                <span>Total Amount:</span>
                <strong>₹{totalAmount}</strong>
              </div>

              <button
                type="button"
                className="checkout-button"
                onClick={handleCheckout}
              >
                Checkout
              </button>

              <Link to="/plants">
                <button
                  type="button"
                  className="continue-shopping-button"
                >
                  Continue Shopping
                </button>
              </Link>

            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartItem;

