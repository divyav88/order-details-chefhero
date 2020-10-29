import { SET_SPINNER } from "../actions";

const initialState = {
  showInProgress: false,
};

const spinnerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SPINNER:
      return {
        showInProgress: action.payload,
      };
    default:
      return state;
  }
};

export default spinnerReducer;
