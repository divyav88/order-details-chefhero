import { createStore, applyMiddleware, compose } from "redux"; //compose for using redux dev tools
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { logger, crashReporter } from "./logger";

const initialState = {};
const middleware = [thunk, logger, crashReporter];
const store = createStore(
  rootReducer,
  initialState,
  compose(
    //to achieve composition of argument functions
    applyMiddleware(...middleware),
    window._REDUX_DEVTOOLS_EXTENSION_
      ? window._REDUX_DEVTOOLS_EXTENSION_()
      : (f) => f
  )
);

export default store;
