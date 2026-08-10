
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

  // Get cart items from Redux store
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate total number of plants/items
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Calculate total cart amount
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

  // Delete item
  const handleDelete = (id) => {
    dispatch(removeFromCart(id));
  };

  // Checkout button
  const handleCheckout = () => {
    alert("Coming Soon!");
  };

  return (
    <div className="cart-page">

      {/* ================= NAVBAR ================= */}
      <nav className="navbar">

        {/* Company Name */}
        <div className="logo">
          🌿 Paradise Nursery
        </div>

        {/* Navigation Links */}
        <div className="nav-links">
          <Link to="/">Home</Link>

          <Link to="/plants">
            Plants
          </Link>

          <Link to="/cart" className="cart-link">
            🛒 Cart
            <span className="cart-count">
              {totalItems}
            </span>
          </Link>
        </div>

      </nav>

      {/* ================= CART PAGE ================= */}
      <div className="cart-container">

        <h1>Shopping Cart</h1>

        {/* ================= EMPTY CART ================= */}
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

          /* ================= CART WITH ITEMS ================= */
          <div className="cart-content">

            {/* Cart Items Section */}
            <div className="cart-items">

              {cartItems.map((item) => (

                <div className="cart-item" key={item.id}>

                  {/* Plant Thumbnail */}
                  <div className="cart-image-container">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-item-image"
                    />
                  </div>

                  {/* Plant Information */}
                  <div className="cart-item-details">

                    {/* Plant Name */}
                    <h2>{item.name}</h2>

                    {/* Unit Price */}
                    <p className="unit-price">
                      Unit Price: ₹{item.price}
                    </p>

                    {/* Quantity Controls */}
                    <div className="quantity-section">

                      <span>Quantity:</span>

                      <div className="quantity-controls">

                        {/* Decrease */}
                        <button
                          className="quantity-button"
                          onClick={() =>
                            handleDecrease(item.id)
                          }
                          disabled={item.quantity <= 1}
                        >
                          −
                        </button>

                        {/* Current Quantity */}
                        <span className="quantity">
                          {item.quantity}
                        </span>

                        {/* Increase */}
                        <button
                          className="quantity-button"
                          onClick={() =>
                            handleIncrease(item.id)
                          }
                        >
                          +
                        </button>

                      </div>
                    </div>

                    {/* Total Cost for Individual Plant */}
                    <p className="plant-total">
                      <strong>
                        Total: ₹{item.price * item.quantity}
                      </strong>
                    </p>

                    {/* Delete Button */}
                    <button
                      className="delete-button"
                      onClick={() =>
                        handleDelete(item.id)
                      }
                    >
                      🗑️ Delete
                    </button>

                  </div>

                </div>

              ))}

            </div>

            {/* ================= CART SUMMARY ================= */}
            <div className="cart-summary">

              <h2>Cart Summary</h2>

              {/* Total Number of Items */}
              <div className="summary-row">
                <span>Total Items:</span>
                <strong>{totalItems}</strong>
              </div>

              {/* Total Amount */}
              <div className="summary-row total-row">
                <span>Total Amount:</span>
                <strong>₹{totalAmount}</strong>
              </div>

              {/* Checkout */}
              <button
                className="checkout-button"
                onClick={handleCheckout}
              >
                Checkout
              </button>

              {/* Continue Shopping */}
              <Link to="/plants">
                <button className="continue-shopping-button">
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

