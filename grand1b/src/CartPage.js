import React, { useState } from "react";
import "./CartPage.css";

const CartPage = () => {
  const initialCartItems = [
    {
      id: 1,
      name: "Orange Juice",
      quantity: 0,
      isVegetarian: true,
      price: 200,
      image: "orange.jpg",
    },
    {
      id: 2,
      name: "Apple Juice",
      quantity: 0,
      isVegetarian: false,
      price: 350,
      image: "apple.png",
    },
    {
      id: 3,
      name: "Mango Juice",
      quantity: 0,
      isVegetarian: true,
      price: 500,
      image: "mango.jpg",
    },
  ];

  const [cartItems, setCartItems] = useState(initialCartItems);

  const removeAll = () => {
    const updatedCartItems = cartItems.map((item) => ({
      ...item,
      quantity: 0,
    }));
    setCartItems(updatedCartItems);
  };

  const handleQuantityChange = (id, newQuantity) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: newQuantity >= 0 ? newQuantity : 0,
        };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const handleRemoveItem = (id) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: 0, 
        };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    alert("Thank you for your purchase!");
    setCartItems(initialCartItems); 
  };

  return (
    <div className="cart-page">
      <h2>Cart</h2>
      <button className="remove-all" onClick={removeAll}>
        Remove All
      </button>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="item-image">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>Price: Rs {item.price} / 250ml Juice</p>
              {item.isVegetarian ? <img src="veg.png" alt="Vegetarian" width="25px"></img> : <img src="non.png" alt="Vegetarian" width="25px"></img>}
            </div>
            <div className="quantity-controls">
              <button
                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
              >
                +
              </button>
            </div>
            <p>Rs {(item.price * item.quantity).toFixed(2)}</p>
            <button
              className="remove-item"
              onClick={() => handleRemoveItem(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <div className="total-price">Total Price: ${totalPrice.toFixed(2)}</div>
        <button className="checkout-button" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
