import React from "react";
import "./CheckoutProduct.css";

const CheckoutProduct = () => {
  return (
    <div className="checkoutProduct">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGIAuGHhlkbvAuSaoIKucObmAXCFLlJjKzdw&usqp=CAU"
        alt=""
        className="checkoutProduct__image"
      />
      <div className=" product__info">
        <p className="checkoutProduct__title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          similique dolorum harum voluptatem vero aliquid quasi quidem
          reprehenderit vel eveniet?
        </p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>20</strong>
        </p>
        <div className="checkoutProduct__rating">**</div>
        <button></button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
