import { GET_ORDER_DETAILS, FILTER_BY } from "../actions";

const initialSate = {
  orderDetails: [],
};

const OrderDetailsReducer = (state = initialSate, action) => {
  switch (action.type) {
    case GET_ORDER_DETAILS:
      return {
        orderDetails: action.payload.orderDetails,
      };
    case FILTER_BY:
      return {
        orderDetails: state.orderDetails.filter(
          (order) =>
            action.payload.filterBy.value ===
            order[action.payload.filterBy.type]
        ),
      };
    default:
      return state;
  }
};

export default OrderDetailsReducer;
