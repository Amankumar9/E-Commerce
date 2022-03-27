import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Payments from "./components/Payments";
import { Route } from "react-router-dom";
import { GetProduct } from "./actions";

function App() {
  const CartItems = useSelector(state => state.CartItems)
  const Products = useSelector(state => state.Product)
  const [drawer, setdrawer] = useState(false)

  const dispatch = useDispatch();

  useEffect(() =>

    dispatch(GetProduct())
    // eslint-disable-next-line
    , []);


  return (
    <div className="App">
     
      <>
        <NavBar setDrawer={setdrawer} />
        <Cart drawer={drawer} setdrawer={setdrawer} />
      </>
      <Route path="/" exact>

        {
          Products.length > 0 ?
            <ProductList />
            :
            <div className="d-flex justify-content-center align-items-center bg-primary" style={{ height: "100vh" }}>
              <h1>Loading...</h1>
            </div>
        }
      </Route>

      <Route path="/details" ><ProductDetails setDrawer={setdrawer} /></Route>
      <Route path="/payment" exact ><Payments cartItems={CartItems} /></Route>

    </div>
  );
}

export default App;
