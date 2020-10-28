import { combineReducers } from "redux";
import orderDetailsReducer from "./orderReducer";

export default combineReducers({
  orderDetails: orderDetailsReducer, //orderDetails accessible in the components
});
