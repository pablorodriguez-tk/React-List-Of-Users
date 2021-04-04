import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import transitionReducer from "./transitionReducer";

export default combineReducers({
  usersReducer,
  transitionReducer,
});
