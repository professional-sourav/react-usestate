import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const initialize = () => {
    console.log("Initialize in fcunction");
    return 1000 + 2000;
  };

  const initializeCart = () => {
    console.log("Initialize cart");

    return {
      qty: 0,
      product_id: 0
    };
  };

  const [number, setNumber] = useState(initialize);
  const [cart, setCart] = useState(initializeCart);

  const handleIncrement = () => {
    setNumber((prevNumber) => prevNumber + 1);
    setNumber((prevNumber) => prevNumber + 1);
  };

  const updateCart = (operator) => {
    setCart((prevCart) => {
      return {
        ...prevCart,
        qty: operator === "+" ? prevCart.qty + 1 : prevCart.qty - 1
      };
    });
  };

  return (
    <div className="App">
      <button onClick={() => setNumber(number - 1)}>-</button>
      <span>{number}</span>
      <button onClick={handleIncrement}>+</button>
      <hr />
      <div className="cart">
        <button onClick={() => updateCart("-")}>-</button>
        <span>{cart.qty}</span>
        <button onClick={() => updateCart("+")}>+</button>
      </div>
    </div>
  );
}
