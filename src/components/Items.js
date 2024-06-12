import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
} from "../Redux-Thunk/Player/footballerSlice";
import "./Items.css";

function Items() {
  const dispatch = useDispatch();

  const { items, cart, totalMoney } = useSelector((state) => state.player);

  const handleBuyButtonClick = (item) => {
    const { id, productPrice, name } = item;
    const quantity = 1;

    if (totalMoney >= productPrice) {
      dispatch(addToCart({ id, name, productPrice, quantity }));
    } else {
      alert("Yetersiz bakiye!");
    }
  };

  const handleSellButtonClick = (item) => {
    const { id, productPrice, name } = item;

    const selectedItem = cart.find((i) => i.id === id);
    if (selectedItem && selectedItem.quantity > 0) {
      dispatch(removeFromCart({ id, name, productPrice }));
    } else {
      alert("Sepette böyle bir ürün yok veya miktar 0'dan küçük!");
    }
  };

  const renderSelectedItemQuantity = (id) => {
    const selected = cart.find((i) => i.id === id);
    return selected ? selected.quantity : 0;
  };

  return (
    <div className="items-container">
      <h2>Football Players</h2>
      <div className="items">
        {items.map((item) => (
          <div key={item.id} className="football-player">
            <img src={item.image} alt={item.name} className="player-image" />
            <h3 className="player-title">{item.name}</h3>
            <p>Position: {item.position}</p>
            <p className="player-price">
              ${item.productPrice.toLocaleString()}
            </p>
            <div className="player-actions">
              <button
                className="btn btn-sell"
                onClick={() => handleSellButtonClick(item)}
                disabled={
                  renderSelectedItemQuantity(item.id) > 0 ? false : true
                }>
                Sell
              </button>

              <input
                type="number"
                className="form-control player-quantity"
                value={renderSelectedItemQuantity(item.id)}
                onChange={() => {}}
              />

              <button
                className="btn btn-add"
                onClick={() => handleBuyButtonClick(item)}
                disabled={
                  totalMoney < item.productPrice &&
                  renderSelectedItemQuantity(item.id) === 0
                }>
                Buy
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Items;
