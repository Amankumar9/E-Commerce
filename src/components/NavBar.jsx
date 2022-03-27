import React from "react";
import { Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { useState,useEffect } from "react";
import { GetProductDetails } from "../actions";

function NavBar({ setDrawer }) {
  const products = useSelector((state) => state.Product);
  const [search, setsearch] = useState(false);
  const searchItems = [];
  const [sResults, setsResults] = useState("");
  const dispatch = useDispatch()

 useEffect(() => {
  document.body.addEventListener('click',()=>{setsearch(false)})
 }, [])
  return (
    <nav className="navbar navbar-expand navbar-light bg-dark position-fixed top-0 w-100 ">
      {products.length > 0
        ? products.forEach((item) => searchItems.push(item.fields.title))
        : null}
      <div
        className=
        {
          search
            ? "search position-fixed p-5 d-flex flex-column-reverse "
            : "search position-fixed p-5  d-flex flex-column-reverse hide "
        }
      >

        <div
          className="card text-left border border-2 p-3 m-2 overflow-hidden searchcard"
          id="result"
          onClick={()=>{
            if (products.length > 0) {
              products.forEach((ele) => 
              {
                // eslint-disable-next-line
                if(ele.fields.title==sResults){
                  console.log("result found"+ ele.id)
                  dispatch(GetProductDetails(ele.id));
                  setsearch(false)
                }
              });
            }
          }}
        >
          <Link to="/details">
          {sResults ? <>{sResults}</> : <h5>loading...</h5>}
          </Link>
        </div>

      </div>
      <div className="nav navbar-nav container-fluid d-flex justify-content-between p-2 ms-5 me-5">
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          <h3>React Cart App</h3>
        </Link>
        <input
          placeholder="Search "
          className="p-2 "
   
          onFocus={() => setsearch(true)}
          onClick={(e)=>e.stopPropagation()}
          onChange={(e) => {
            searchItems.forEach((Sitems) => {
              if (Sitems.toLowerCase().includes(e.target.value.toLowerCase())) {
                setsResults([Sitems]);
              }
            });
          }}
        ></input>

        <button
          className="bg-transparent border border-0"
          onClick={() => {
            setDrawer(true);
          }}
        >
          <img
            src="https://img.icons8.com/color/50/000000/shopping-cart.png"
            alt=""
          />
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
