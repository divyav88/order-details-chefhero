import { GET_ORDER_DETAILS, FILTER_BY } from "../actions";

const initialSate = {
  orderDetails: [],
  filterBy: { value: "NONE" },
};

const OrderDetailsReducer = (state = initialSate, action) => {
  switch (action.type) {
    case GET_ORDER_DETAILS:
      return {
        ...state,
        orderDetails: action.payload.orderDetails,
      };
    case FILTER_BY:
      return {
        ...state,
        filterBy: action.payload.filterBy,
      };
    default:
      return state;
  }
};

export default OrderDetailsReducer;
