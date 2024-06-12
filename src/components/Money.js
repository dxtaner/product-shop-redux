// Money.js

import React from "react";
import { useSelector } from "react-redux";
import "./Money.css";

function Money() {
  const balance = useSelector((state) => state.player.totalMoney);

  const formattedBalance = balance.toLocaleString();

  return (
    <div className="money-container">
      <h2>Money: ${formattedBalance}</h2>
    </div>
  );
}

export default Money;
