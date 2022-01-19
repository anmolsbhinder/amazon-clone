import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      {/* <h1 className="gimic">Checkout mf</h1> */}
      <div className="checkout_left">
        <img className="checkout_ad" src="" />

        <div>
          <h2 className="checkout_title">Shopping Cart</h2>
        </div>
      </div>

      <div className="checkout_right">
        <img
          className="filler"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png"
        />
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;