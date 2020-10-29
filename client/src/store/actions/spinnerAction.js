import { SET_SPINNER } from "./types";

export const setSpinner = (showInProgress) => ({
  type: SET_SPINNER,
  payload: showInProgress,
});
