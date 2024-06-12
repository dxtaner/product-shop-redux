// store.js

import { configureStore } from "@reduxjs/toolkit";
import footballerSlice from "./Player/footballerSlice.js";

const store = configureStore({
  reducer: {
    player: footballerSlice,
  },
});

export default store;
