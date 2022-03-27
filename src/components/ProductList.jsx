import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetProductDetails } from "../actions";

function ProductList() {
  const products = useSelector((state) => state.Product);
  const dispatch = useDispatch();
  return (
    <div className="productList">
     
      <div className="List">
        {products.map((item, index) => (
          <Link
            key={index}
            to={"/details/" + item.id}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <div
              className="card text-left border border-2 p-3 m-2 overflow-hidden"
              style={{ width: "24rem", height: "30rem" }}
              key={index}
              onClick={() => {
                dispatch(GetProductDetails(item.id));
              }}
            >
              <img
                style={{ width: "22rem", height: "15rem" }}
                className="card-img-top"
                src={item.fields.Images[0].url}
                alt=""
              />
              <div
                className="card-body"
                style={{ width: "22rem", height: "10rem" }}
              >
                <h4 className="card-title">{item.fields.title}</h4>
                <p className="card-text">{item.fields.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
