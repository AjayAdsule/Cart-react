/* eslint-disable react/prop-types */
import React from "react";
import { Button, Card } from "react-bootstrap";
import Rating from "./Rating";
import { CartState } from "../Context/Context";

const SingleProduct = ({ item }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const { id, name, image, price, fastDelivery, ratings, inStock } = item;
  return (
    <React.Fragment>
      <div className="products" key={id}>
        <Card>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Subtitle style={{ paddingBottom: 10 }}>
              <span>RS {price.split(".")[0]}</span>
              {fastDelivery ? (
                <div>Fast Delivery</div>
              ) : (
                <div>4 Day delivery</div>
              )}
              <Rating rate={ratings} />
            </Card.Subtitle>
            {cart.some((items) => items.id == id) ? (
              <Button
                variant="danger"
                onClick={() =>
                  dispatch({ type: "REMOVE_FROM_CART", payLoad: item })
                }
              >
                Remove From Cart
              </Button>
            ) : (
              <Button
                variant={!inStock ? "danger" : "primary"}
                disabled={!inStock}
                onClick={() => dispatch({ type: "ADD_TO_CART", payLoad: item })}
              >
                {inStock ? "Add " : "out of stock"}
              </Button>
            )}
          </Card.Body>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default SingleProduct;
