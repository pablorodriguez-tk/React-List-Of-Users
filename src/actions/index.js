import randomUserGenerator from "../apis/randomUserGenerator";
import { FETCH_USERS } from "./types";

export const fetchUsers = () => async (dispatch) => {
  const response = await randomUserGenerator.get(`/?results=50`);
  console.log(response.data.results);
  dispatch({ type: FETCH_USERS, payload: response.data.results });
};
