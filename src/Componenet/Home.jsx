import React from "react";
import { CartState } from "../Context/Context";
import SingleProduct from "./SingleProduct";
import Filter from "./Filter";

const Home = () => {
  const { state } = CartState();
  console.log(state);

  return (
    <React.Fragment>
      <div className="home">
        <Filter />
        <div className="productContainer border">
          {state.products.map((item) => {
            return <SingleProduct item={item} key={item.id} />;
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
