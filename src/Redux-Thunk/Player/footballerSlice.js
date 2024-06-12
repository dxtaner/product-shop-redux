import { createSlice } from "@reduxjs/toolkit";
import footballerjson from "../../footballer.json";

const initialState = {
  items: footballerjson.players.map((player) => ({
    ...player,
    count: 0,
  })),
  cart: [],
  totalMoney: 99999999999,
};

const footballerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, name, productPrice, quantity } = action.payload;
      const existingItem = state.cart.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.cart.push({ id, name, productPrice, quantity });
      }

      state.totalMoney -= productPrice * quantity;
    },
    removeFromCart: (state, action) => {
      const { id, productPrice } = action.payload;
      const existingItem = state.cart.find((item) => item.id === id);

      if (existingItem && existingItem.quantity > 0) {
        existingItem.quantity -= 1;
        state.totalMoney += productPrice;

        if (existingItem.quantity === 0) {
          state.cart = state.cart.filter((item) => item.id !== id);
        }
      }
    },
  },
});

export const { addToCart, removeFromCart } = footballerSlice.actions;

export default footballerSlice.reducer;
