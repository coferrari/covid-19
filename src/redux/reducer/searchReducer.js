import { SEARCH_COUNTRY, CLEAR_DETAIL } from "../actions/types";

const initialState = {
  search: [],
};

const searchReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SEARCH_COUNTRY:
      return {
        ...state,
        search: payload,
      };
    case CLEAR_DETAIL:
      return {
        ...state,
        search: [],
      };
    default:
      return state;
  }
};

export default searchReducer;
