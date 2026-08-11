
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  updateQuantity,
} from "./CartSlice";
import { Link } from "react-router-dom";

function CartItem() {
  const dispatch = useDispatch();

  // Get cart items from Redux store
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate total number of items
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Calculate total cart amount
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Handle decrease button
  const handleDecrease = (item) => {
    if (item.quantity === 1) {
      // Remove item when quantity reaches zero
      dispatch(removeItem(item.id));
    } else {
      // Decrease quantity
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1,
        })
      );
    }
  };

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty</h2>

          <Link to="/products">
            <button className="continue-shopping">
              Continue Shopping
            </button>
          </Link>
        </div>
      ) : (
        <>
          {/* Display each cart item */}
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>

              {/* Plant Thumbnail */}
              <img
                src={item.image}
                alt={item.name}
                className="cart-thumbnail"
              />

              {/* Plant Details */}
              <div className="item-details">
                <h2>{item.name}</h2>

                {/* Unit Price */}
                <p className="unit-price">
                  Unit Price: ₹{item.price}
                </p>

                {/* Quantity Controls */}
                <div className="quantity-controls">

                  {/* Decrease Quantity */}
                  <button
                    className="decrease-btn"
                    onClick={() => handleDecrease(item)}
                  >
                    -
                  </button>

                  <span className="quantity">
                    {item.quantity}
                  </span>

                  {/* Increase Quantity */}
                  <button
                    className="increase-btn"
                    onClick={() =>
                      dispatch(
                        updateQuantity({
                          id: item.id,
                          quantity: item.quantity + 1,
                        })
                      )
                    }
                  >
                    +
                  </button>
                </div>

                {/* Total Cost for Each Plant */}
                <p className="item-total">
                  Total: ₹{item.price * item.quantity}
                </p>

                {/* Delete Button */}
                <button
                  className="delete-btn"
                  onClick={() => dispatch(removeItem(item.id))}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

          {/* Cart Summary */}
          <div className="cart-summary">
            <h2>Cart Summary</h2>

            <p className="total-items">
              Total Items: {totalItems}
            </p>

            <h2 className="total-amount">
              Total Amount: ₹{totalAmount}
            </h2>

            {/* Checkout Button */}
            <button
              className="checkout-btn"
              onClick={() => alert("Coming Soon")}
            >
              Checkout
            </button>

            {/* Continue Shopping Button */}
            <Link to="/products">
              <button className="continue-shopping">
                Continue Shopping
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default CartItem;

