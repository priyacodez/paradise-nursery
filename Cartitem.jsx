
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

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div>
          <h2>Your cart is empty</h2>

          <Link to="/products">
            <button>Continue Shopping</button>
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
                <p>Unit Price: ₹{item.price}</p>

                {/* Quantity Controls */}
                <div className="quantity-controls">
                  <button
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => dispatch(increaseQuantity(item.id))}
                  >
                    +
                  </button>
                </div>

                {/* Total cost for this plant */}
                <p>
                  Total: ₹{item.price * item.quantity}
                </p>

                {/* Delete Button */}
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

          {/* Cart Summary */}
          <div className="cart-summary">
            <h2>Cart Summary</h2>

            <p>Total Items: {totalItems}</p>

            <h2>Total Amount: ₹{totalAmount}</h2>

            {/* Checkout Button */}
            <button
              onClick={() => alert("Coming Soon")}
              className="checkout-button"
            >
              Checkout
            </button>

            {/* Continue Shopping */}
            <Link to="/products">
              <button className="continue-button">
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

