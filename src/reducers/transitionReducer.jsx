import { TRANSITION } from "../actions/types";

// eslint-disable-next-line
export default (state = false, action) => {
  switch (action.type) {
    case TRANSITION:
      return action.payload;
    default:
      return state;
  }
};
