// Invoice.js

import React from "react";
import { useSelector } from "react-redux";
import "./Invoice.css";

function Invoice() {
  const cart = useSelector((state) => state.player.cart);

  const totalMoney = cart.reduce(
    (total, item) => total + item.productPrice * item.quantity,
    0
  );

  const formattedTotalMoney = totalMoney.toLocaleString();

  return (
    <div className="invoice-container">
      <h2>Invoice</h2>
      <ul>
        {cart
          .filter((item) => item.quantity > 0)
          .map((item) => (
            <li key={item.id} className="invoice-item">
              <div className="item-details">
                <span className="item-name">{item.name}</span>
                <span className="item-quantity">X{item.quantity}</span>
                <span className="item-total">
                  ${(item.productPrice * item.quantity).toLocaleString()}
                </span>
              </div>
            </li>
          ))}
      </ul>
      <hr />

      <div className="total-amount">
        <p>Total Amount: ${formattedTotalMoney}</p>
      </div>
    </div>
  );
}

export default Invoice;
