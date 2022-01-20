import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      title: title,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} />

      <div className="checkoutProduct_info">
        <p>{title}</p>

        <div className="rat">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐️</p>
            ))}
        </div>

        <button onClick={removeFromBasket}>Delete</button>
      </div>

      <div className="checkoutProduct_price">
        <p>
          ₹<strong>{price}</strong>
        </p>
      </div>
    </div>
  );
}

export default CheckoutProduct;
