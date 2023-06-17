import React from "react";
import "./Product.css";

const Product = () => {
  return (
    <div>
      <div className="product">
        <div className="product__info">
          <p>Title</p>
          <p className="product__price">$30</p>
          <div className="product__rating"> ⭐ ⭐</div>
        </div>
        <img
          src="https://www.freeiconspng.com/thumbs/bag-png/clothing-bag-png-1.png"
          alt="product-image"
        />
        <button>Add to Basket</button>
      </div>
    </div>
  );
};

export default Product;
