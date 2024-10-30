// src/Products.js

import React, { useState } from "react";
import "./Products.css"; // Import the CSS file for styling

const Products = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Apple",
      price: 20,
      image:
        "https://cdn.britannica.com/22/187222-050-07B17FB6/apples-on-a-tree-branch.jpg",
    },
    {
      id: 2,
      name: "Banana",
      price: 50,
      image:
        "https://www.foodandwine.com/thmb/4fzQW9u60XlhTk52CIuM1BlLhcc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/amazonfreebananas-em-86304874-2000-5a276309cf1944349fb55818c98c7b1b.jpg",
    },
    {
      id: 3,
      name: "Orange",
      price: 35,
      image: "https://cdn.britannica.com/24/174524-050-A851D3F2/Oranges.jpg",
    },
  ]);

  const [fruitType, setFruitType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [address, setAddress] = useState("");
  const [orders, setOrders] = useState([]);

  const handleOrderSubmit = (e) => {
    e.preventDefault();

    if (!fruitType || !quantity || !contactInfo || !address) {
      alert("Please fill out all fields!");
      return;
    }

    const newOrder = {
      id: orders.length + 1,
      fruitType,
      quantity,
      contactInfo,
      address,
    };

    setOrders([...orders, newOrder]);

    setFruitType("");
    setQuantity("");
    setContactInfo("");
    setAddress("");
  };

  return (
    <div className="products-container">
      <h2>Our Products</h2>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3 className="product-title">{product.name}</h3>
            <p className="product-price">Price: ${product.price}</p>
          </li>
        ))}
      </ul>

      <h2 className="order-header">Order your Fruits</h2>

      <form onSubmit={handleOrderSubmit} className="order-form">
        <div className="form-group">
          <label>Fruit Type:</label>
          <select
            className="form-input"
            value={fruitType}
            onChange={(e) => setFruitType(e.target.value)}
          >
            <option value="">Select a fruit</option>
            {products.map((product) => (
              <option key={product.id} value={product.name}>
                {product.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Quantity:</label>
          <input
            className="form-input"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            min="1"
          />
        </div>

        <div className="form-group">
          <label>Contact Number:</label>
          <input
            className="form-input"
            type="text"
            value={contactInfo}
            onChange={(e) => setContactInfo(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Delivery Address:</label>
          <textarea
            className="form-input"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Your delivery address"
          ></textarea>
        </div>

        <button type="submit" className="submit-button">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Products;
