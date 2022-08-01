import { GET_USERS } from "../types";

const initialState = {
  users: [],
  loading: true,
};
// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};