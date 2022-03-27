import React from "react";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { AddtoCart } from "../actions";
import { Link } from "react-router-dom";
import { RemovefromCart } from "../actions";

function ProductDetails({ setDrawer }) {
  const item = useSelector((state) => state.Details);
  const CartItems = useSelector((state) => state.CartItems);
  const [qty, setqty] = useState(1);
  let Add = 0;
  const dispatch = useDispatch();

  return (
    <div className="container d-flex justify-content-center productdetails ">
      <Link to="/">
        <button className="close border border-0 bg-transparent">back</button>
      </Link>
      <div
        className="card border border-2 p-3 m-2 item"
        style={{ width: "25rem" }}
      >
        <img
          style={{ width: "22rem", height: "15rem" }}
          className="card-img-top"
          src={item.Images ? item.Images[0].url : null}
          alt=""
        />
        <div className="card-body" style={{ width: "22rem", height: "30rem" }}>
          <h4 className="card-title">{item.title}</h4>
          <p className="card-text">{item.description}</p>
          <h3>Price: ₹{item.price}</h3>
          <br />

          <input
            className="qty p-2 my-3"
            id="qty"
            style={{ width: "4rem", height: "2rem" }}
            placeholder="1"
            value={qty}
            type="number"
            min={1}
            max={9}
            onChange={(e) => {
              setqty(e.target.value);
            }}
          ></input>

          <br />
          <Button
            variant="dark"
            onClick={() => {
              if (CartItems.length > 0) {
                CartItems.forEach((element, index) => {
                  // eslint-disable-next-line
                  if (element.item.id == item.id && element.qty == qty) {
                    Add = 1;
                    setDrawer(true);
                  }
                  // eslint-disable-next-line
                  if (element.qty != qty) {
                    dispatch(RemovefromCart(index));
                  }
                });
              }

              // eslint-disable-next-line
              if (Add == 0) {
                dispatch(AddtoCart(item, qty));
              }
              setDrawer(true);
            }}
          >
            Buy now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
