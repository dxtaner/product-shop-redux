import "./App.css";

import Header from "./components/Header.js";
import Money from "./components/Money.js";
import Items from "./components/Items.js";
import Invoice from "./components/Invoice.js";
import Footer from "./components/Footer.js";
import { useSelector } from "react-redux";

function App() {
  const { cart } = useSelector((state) => state.player);

  return (
    <>
      <div className="root_container">
        <Header />
        <Money />
        <Items />
        {cart.length > 0 ? <Invoice /> : <p>Your shopping cart is empty.</p>}
      </div>
      <Footer />
    </>
  );
}

export default App;
