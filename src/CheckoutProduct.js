import React from "react";
import "./CheckoutProduct.css";

function CheckoutProduct({ id, image, title, price, rating }) {
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} />

      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <strong>{price}</strong>
          <small>
            <sup> €</sup>
          </small>
        </p>
        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        <button>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
