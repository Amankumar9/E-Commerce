import React from "react";
import { useSelector } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import { RemovefromCart } from "../actions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
function Cart({ drawer, setdrawer }) {
  const CartItems = useSelector((state) => state.CartItems);
  const dispatch = useDispatch();
  return (
    <Modal show={drawer} fullscreen={true} onHide={() => setdrawer(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Cart Items</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {CartItems.length > 0 ? (
          CartItems.map((item, index) => (
            <div
              key={index}
              style={{ height: "8rem" }}
              className="p-3 m-3 bg-info d-flex flex-row position-relative"
            >
              <img
                src={item.item.Images? item.item.Images[0].url:null}
                style={{ width: "5rem", height: "5rem" }}
                alt=""
              />
              <div className="px-3 d-flex flex-column">
                <h5>{item.item.title}</h5>
                <p>₹{item.item.price}</p>
                <p>Quantity: {item.qty}</p>
              </div>
              <button
                className="p-3 position-absolute bg-transparent border border-0 top-0 end-0"
                onClick={() => dispatch(RemovefromCart(index))}
              >
                x
              </button>
            </div>
          ))
        ) : (
          <h1> No item Added</h1>
        )}
      </Modal.Body>
      <Modal.Footer>
        {CartItems.length > 0 ? (
          <Link to="/payment">
            
            <Button onClick={() => setdrawer(false)}>
              Checkout({CartItems.length}) items
            </Button>
          </Link>
        ) : (
          <Button onClick={() => alert("No item in Cart")}>
            Checkout({CartItems.length}) items
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
}

export default Cart;
