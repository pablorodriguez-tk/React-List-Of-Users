import randomUserGenerator from "../apis/randomUserGenerator";
import { FETCH_USERS, TRANSITION } from "./types";

export const fetchUsers = (page = 0) => async (dispatch) => {
  const response = await randomUserGenerator.get(
    `?page=${page}&results=50&seed=static`
  );
  dispatch({ type: FETCH_USERS, payload: response.data.results });
};

export const transitionOn = () => (dispatch) => {
  dispatch({ type: TRANSITION, payload: true });
};

export const transitionOff = () => (dispatch) => {
  dispatch({ type: TRANSITION, payload: false });
};
