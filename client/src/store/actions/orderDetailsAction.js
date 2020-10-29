import { GET_ORDER_DETAILS, FILTER_BY } from "./types";
import { setSpinner } from "./spinnerAction";
import axios from "axios";

export const getOrderDetails = () => async (dispatch) => {
  try {
    dispatch(setSpinner(true));
    const orderDetailsUrl = "https://chefhero.free.beeceptor.com/";
    const orderResponse = await axios.get(orderDetailsUrl);

    //forming orderDetails with relevent data to display
    const orderDetails = orderResponse.data.data.map((order) => {
      return {
        id: order.id,
        orderBuyerStatus: order.orderBuyerStatus,
        total: order.total,
        deliveryDay: order.deliveryDay,
        vendorName: order.vendorName,
        isBYOS: order.isBYOS,
        isPendingVendorOnboarding: order.isPendingVendorOnboarding,
      };
    });
    //passing the payload with orderDetails and filterBy which is used in the reducer

    dispatch({
      type: GET_ORDER_DETAILS,
      payload: {
        orderDetails: orderDetails,
        filterBy: {
          value: "NONE",
        },
      },
    });
  } catch (err) {
    dispatch(setSpinner(false));
  } finally {
    dispatch(setSpinner(false));
  }
};

export const filterOrderDetails = (filterBy) => ({
  type: FILTER_BY,
  payload: {
    filterBy, //filterBy: filterBy
  },
});
