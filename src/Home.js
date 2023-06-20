import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="home__container">
          <img
            src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg"
            alt=""
            className="home__image"
          />
          <div className="home__row">
            <Product
              id="12321341"
              title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, nobis."
              price={11.96}
              rating={5}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGIAuGHhlkbvAuSaoIKucObmAXCFLlJjKzdw&usqp=CAU"
            />
            <Product
              id="12321342"
              title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, "
              price={10.96}
              rating={4}
              image="https://static.zara.net/photos///2023/V/1/1/p/6071/110/500/2/w/824/6071110500_15_1_1.jpg?ts=1677242142820"
            />
          </div>
          <div className="home__row">
            <Product
              id="12321343"
              title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. "
              price={13.96}
              rating={3}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRURyQieFQVMzctriBpTMxUV4yErb9zGn1Nwg&usqp=CAU"
            />
            <Product
              id="12321344"
              title="Lorem ipsum dolor sit amet, consectetur adipisicing"
              price={9.96}
              rating={5}
              image="https://ayb.akinoncdn.com/products/2022/11/07/2066892/b9d456a7-a075-4b82-a7cc-d9920bafb4be_size780x780_quality60_cropCenter.jpg"
            />
            <Product
              id="12321345"
              title="Lorem ipsum dolor sit amet, consectetur"
              price={8.96}
              rating={4}
              image="https://ayb.akinoncdn.com/products/2022/11/07/2225425/8e91a242-890e-40c0-ab5a-d4bd1c1543d9_size780x780_quality60_cropCenter.jpg"
            />
          </div>
          <div className="home__row">
            <Product
              id="12321346"
              title="Lorem ipsum dolor sit amet,"
              price={7.96}
              rating={3}
              image="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/981f3e99-a681-46d1-999b-cb57fb42803c/s%C4%B1rt-%C3%A7antas%C4%B1-21-l-Rd2lxW.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
