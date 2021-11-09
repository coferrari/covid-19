import { GET_ALL, COUNTRY_ORDER, COUNTRY_FILTER } from "../actions/types";

const initialState = {
  statistics: [],
  orderedStatistics: [],
  filteredStatistics: []
};

const statisticsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL:
      return {
        ...state,
        statistics: payload,
        filteredStatistics: payload
      };
    case COUNTRY_FILTER:
      const countries = state.statistics;
      const countriesFiltered = payload ? countries.filter((country) => country.name.toLowerCase().includes(payload.toLowerCase())) : countries
      return {
        ...state,
        statistics: countries,
        filteredStatistics: countriesFiltered
      }
    case COUNTRY_ORDER:
      let ordered;
      if (payload === true) {
        ordered = state.statistics.sort((a, b) => {
          if (a.country > b.country) return 1;
          else return -1;
        });
      } 
      if (payload === false) {
        ordered = state.statistics.sort((a, b) => {
          if (a.country < b.country) return 1;
          else return -1;
        });
      }
      return {
        ...state,
        orderedStatistics: ordered,
      };
    default:
      return state;
  }
};

export default statisticsReducer;
