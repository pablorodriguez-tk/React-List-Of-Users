import randomUserGenerator from "../apis/randomUserGenerator";
import { FETCH_USERS } from "./types";

export const fetchUsers = (page = 0) => async (dispatch) => {
  const response = await randomUserGenerator.get(
    `?page=${page}&results=10&seed=static`
  );
  dispatch({ type: FETCH_USERS, payload: response.data.results });
};
