import {
  SEARCH_COUNTRY_REQUEST,
  SEARCH_COUNTRY_SUCCESS,
  SEARCH_COUNTRY_FAILURE,
  CLEAR_DETAIL,
  INPUT_SEARCH,
  INPUT_CLEAR,
} from "../actions/types";

const initialState = {
  search: [],
  searchInput: "",
  requestAPI: false,
  error: {},
};

const searchReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SEARCH_COUNTRY_REQUEST:
      return {
        ...state,
        requestAPI: true,
      };
    case SEARCH_COUNTRY_SUCCESS:
      return {
        ...state,
        requestAPI: false,
        search: payload,
      };
    case SEARCH_COUNTRY_FAILURE:
      return {
        ...state,
        error: payload,
      };
    case CLEAR_DETAIL:
      return {
        ...state,
        search: [],
      };
    case INPUT_SEARCH:
      return {
        ...state,
        searchInput: payload,
      };
    case INPUT_CLEAR:
      return {
        ...state,
        searchInput: "",
      };
    default:
      return state;
  }
};

export default searchReducer;
