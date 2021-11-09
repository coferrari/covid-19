import axios from "axios";
import apiParams from "../../config";
import {
  GET_ALL_REQUEST,
  GET_ALL_SUCCESS,
  GET_ALL_FAILURE,
  SEARCH_COUNTRY_REQUEST,
  SEARCH_COUNTRY_SUCCESS,
  SEARCH_COUNTRY_FAILURE,
  CLEAR_DETAIL,
  COUNTRY_FILTER,
  INPUT_SEARCH,
  INPUT_CLEAR,
} from "./types";

const options = {
  method: apiParams.GET,
  url: apiParams.baseURL,
  headers: {
    "x-rapidapi-host": process.env.REACT_APP_APIHost,
    "x-rapidapi-key": process.env.REACT_APP_APIKey,
  },
};

export const getAllRequest = () => {
  return {
    type: GET_ALL_REQUEST,
  };
};

export const getAllSuccess = (statistics) => {
  return {
    type: GET_ALL_SUCCESS,
    payload: statistics,
  };
};

export const getAllFailure = (error) => {
  return {
    type: GET_ALL_FAILURE,
    payload: error,
  };
};

export const getAll = () => {
  return (dispatch) => {
    dispatch(getAllRequest());
    axios
      .request(options)
      .then((response) => {
        dispatch(getAllSuccess(response.data.response));
      })
      .catch((error) => {
        dispatch(getAllFailure(error));
      });
  };
};

export const searchCountryRequest = () => {
  return {
    type: SEARCH_COUNTRY_REQUEST,
  };
};

export const searchCountrySuccess = (statistics) => {
  return {
    type: SEARCH_COUNTRY_SUCCESS,
    payload: statistics,
  };
};

export const searchCountryFailure = (error) => {
  return {
    type: SEARCH_COUNTRY_FAILURE,
    payload: error,
  };
};

export const searchCountry = (country) => {
  return (dispatch) => {
    dispatch(searchCountryRequest());
    axios
      .request({ ...options, ...{ params: { country } } })
      .then((response) => {
        dispatch(searchCountrySuccess(response.data.response));
      })
      .catch((error) => {
        dispatch(searchCountryFailure(error));
      });
  };
};

export const clearDetail = () => {
  return {
    type: CLEAR_DETAIL,
  };
};

export const filterCountries = (country) => {
  return {
    type: COUNTRY_FILTER,
    payload: country,
  };
};

export const setInputSearch = (country) => {
  return {
    type: INPUT_SEARCH,
    payload: country,
  };
};

export const clearInputSearch = () => {
  return {
    type: INPUT_CLEAR,
  };
};
