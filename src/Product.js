import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  console.log("This Basket >>> ", basket);
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <img className="product_image" src={image} alt="" />

      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐️</p>
            ))}
        </div>
      </div>

      <button className="product_add" onClick={addToBasket}>
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
