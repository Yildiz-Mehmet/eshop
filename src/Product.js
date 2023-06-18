import React from "react";
import "./Product.css";

const Product = () => {
  return (
    <div className="product">
      <div className="product__info">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
          facilis!
        </p>
        <p className="product__price">
          <small>$</small>
          <strong>30</strong>
        </p>
        <div className="product__rating"> ⭐ ⭐</div>
      </div>
      <img
        src="https://www.freeiconspng.com/thumbs/bag-png/clothing-bag-png-1.png"
        alt="product-image"
      />
      <button>Add to Basket</button>
    </div>
  );
};

export default Product;
