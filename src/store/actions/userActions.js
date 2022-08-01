import axios from "axios";
import { GET_USERS_BY_ID, USER_ERROR } from "../types";

export const getUserById = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `http://jsonplaceholder.typicode.com/users/${id}`
    );
    dispatch({
      type: GET_USERS_BY_ID,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: USER_ERROR,
      payload: console.log(e),
    });
  }
};