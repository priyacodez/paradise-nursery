```jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "./CartSlice";

function CartItem() {
  const dispatch = useDispatch();

  // Get cart items from Redux
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate total cart amount
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Handle checkout
  const handleCheckout = () => {
    alert("Checkout is Coming Soon!");
  };

  return (
    <div className="cart-page">

      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">🌿 Paradise Nursery</div>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/plants">Plants</a>
          <a href="/cart">🛒 Cart</a>
        </div>
      </nav>

      {/* Cart Heading */}
      <div className="cart-container">
        <h1>Shopping Cart</h1>

        {/* Empty Cart Message */}
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h2>Your cart is empty 🌱</h2>
            <p>Add some beautiful plants to your cart!</p>

            <a href="/plants">
              <button>Continue Shopping</button>
            </a>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="cart-items">
              {cartItems.map((item) => (
                <div className="cart-item" key={item.id}>

                  {/* Plant Thumbnail */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-image"
                  />

                  {/* Plant Information */}
                  <div className="cart-item-details">
                    <h2>{item.name}</h2>
                    <p>Unit Price: ₹{item.price}</p>

                    {/* Quantity Controls */}
                    <div className="quantity-controls">
                      <button
                        onClick={() =>
                          dispatch(decreaseQuantity(item.id))
                        }
                      >
                        −
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() =>
                          dispatch(increaseQuantity(item.id))
                        }
                      >
                        +
                      </button>
                    </div>

                    {/* Total Cost for This Plant */}
                    <p className="item-total">
                      Total: ₹{item.price * item.quantity}
                    </p>

                    {/* Delete Button */}
                    <button
                      className="delete-button"
                      onClick={() =>
                        dispatch(removeFromCart(item.id))
                      }
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

              <p>
                Total Items:{" "}
                {cartItems.reduce(
                  (total, item) => total + item.quantity,
                  0
                )}
              </p>

              <h2>Total Amount: ₹{totalAmount}</h2>

              {/* Checkout Button */}
              <button
                className="checkout-button"
                onClick={handleCheckout}
              >
                Checkout
              </button>

              {/* Continue Shopping Button */}
              <a href="/plants">
                <button className="continue-shopping">
                  Continue Shopping
                </button>
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartItem;
```
