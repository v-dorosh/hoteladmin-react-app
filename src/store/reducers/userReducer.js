import { GET_USERS_BY_ID } from "../types";

const initialState = {
  user: [],
  loading: true,
};
// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_BY_ID:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};