import { combineReducers } from "redux";
import orderDetailsReducer from "./orderReducer";
import spinnerReducer from "./spinnerReducer";

export default combineReducers({
  orderDetails: orderDetailsReducer, //orderDetails accessible in the components
  showInProgress: spinnerReducer,
});
