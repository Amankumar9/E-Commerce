import { combineReducers } from "redux";
import Productreducer from "./ProductsReducer";
import Detailreducer from "./Detailreducer";
import CartReducer from "./CartReducer";

const rootReducer = combineReducers({
    Product: Productreducer,
    Details:Detailreducer,
    CartItems:CartReducer,
    
})

export default rootReducer;
