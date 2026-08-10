import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./CartSlice";

function ProductList() {
  const dispatch = useDispatch();

  // Get items from Redux cart
  const cartItems = useSelector((state) => state.cart.items);

  // Plant data - 6 plants in each category
  const plants = [
    // Indoor Plants
    {
      id: 1,
      name: "Snake Plant",
      price: 299,
      category: "Indoor Plants",
      image: "/images/snake-plant.jpg",
    },
    {
      id: 2,
      name: "Peace Lily",
      price: 349,
      category: "Indoor Plants",
      image: "/images/peace-lily.jpg",
    },
    {
      id: 3,
      name: "Money Plant",
      price: 199,
      category: "Indoor Plants",
      image: "/images/money-plant.jpg",
    },
    {
      id: 4,
      name: "Spider Plant",
      price: 249,
      category: "Indoor Plants",
      image: "/images/spider-plant.jpg",
    },
    {
      id: 5,
      name: "ZZ Plant",
      price: 399,
      category: "Indoor Plants",
      image: "/images/zz-plant.jpg",
    },
    {
      id: 6,
      name: "Areca Palm",
      price: 449,
      category: "Indoor Plants",
      image: "/images/areca-palm.jpg",
    },

    // Flowering Plants
    {
      id: 7,
      name: "Rose Plant",
      price: 299,
      category: "Flowering Plants",
      image: "/images/rose.jpg",
    },
    {
      id: 8,
      name: "Hibiscus",
      price: 249,
      category: "Flowering Plants",
      image: "/images/hibiscus.jpg",
    },
    {
      id: 9,
      name: "Jasmine",
      price: 279,
      category: "Flowering Plants",
      image: "/images/jasmine.jpg",
    },
    {
      id: 10,
      name: "Marigold",
      price: 199,
      category: "Flowering Plants",
      image: "/images/marigold.jpg",
    },
    {
      id: 11,
      name: "Orchid",
      price: 499,
      category: "Flowering Plants",
      image: "/images/orchid.jpg",
    },
    {
      id: 12,
      name: "Bougainvillea",
      price: 349,
      category: "Flowering Plants",
      image: "/images/bougainvillea.jpg",
    },

    // Outdoor Plants
    {
      id: 13,
      name: "Aloe Vera",
      price: 199,
      category: "Outdoor Plants",
      image: "/images/aloe-vera.jpg",
    },
    {
      id: 14,
      name: "Cactus",
      price: 249,
      category: "Outdoor Plants",
      image: "/images/cactus.jpg",
    },
    {
      id: 15,
      name: "Bamboo Plant",
      price: 299,
      category: "Outdoor Plants",
      image: "/images/bamboo.jpg",
    },
    {
      id: 16,
      name: "Lavender",
      price: 399,
      category: "Outdoor Plants",
      image: "/images/lavender.jpg",
    },
    {
      id: 17,
      name: "Tulsi Plant",
      price: 149,
      category: "Outdoor Plants",
      image: "/images/tulsi.jpg",
    },
    {
      id: 18,
      name: "Croton Plant",
      price: 299,
      category: "Outdoor Plants",
      image: "/images/croton.jpg",
    },
  ];

  // Calculate total number of items in cart
  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Add product to cart
  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  // Check whether a plant is already in cart
  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  // Get unique categories
  const categories = [...new Set(plants.map((plant) => plant.category))];

  return (
    <div className="product-page">

      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">🌿 Paradise Nursery</div>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/plants">Plants</a>
          <a href="/cart">
            🛒 Cart ({cartCount})
          </a>
        </div>
      </nav>

      {/* Page Heading */}
      <div className="product-header">
        <h1>Our Plants</h1>
        <p>Choose from our beautiful collection of plants.</p>
      </div>

      {/* Plant Categories */}
      {categories.map((category) => (
        <section className="plant-category" key={category}>
          <h2>{category}</h2>

          <div className="plant-grid">
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <div className="plant-card" key={plant.id}>

                  {/* Plant Image */}
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="plant-image"
                  />

                  {/* Plant Details */}
                  <h3>{plant.name}</h3>
                  <p>₹{plant.price}</p>

                  {/* Add to Cart Button */}
                  <button
                    onClick={() => handleAddToCart(plant)}
                    disabled={isInCart(plant.id)}
                  >
                    {isInCart(plant.id)
                      ? "Added to Cart"
                      : "Add to Cart"}
                  </button>

                </div>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;
