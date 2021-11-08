import axios from "axios";
import apiParams from "../../config";
import { GET_ALL } from "./types";

const options = {
  method: apiParams.GET,
  url: apiParams.baseURL,
  headers: {
    "x-rapidapi-host": process.env.REACT_APP_APIHost,
    "x-rapidapi-key": process.env.REACT_APP_APIKey,
  },
};

export const getAll = () => {
  return (dispatch) => {
    axios
      .request(options)
      .then((response) => {
        dispatch({
          type: GET_ALL,
          payload: response.data.response,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
