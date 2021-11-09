import { 
  COUNTRY_FILTER,   
  GET_ALL_REQUEST,
  GET_ALL_SUCCESS,
  GET_ALL_FAILURE, 
} from "../actions/types";

const initialState = {
  loading: true,
  requestAPI: false,
  error: {},
  statistics: [],
  filteredStatistics: [],
};

const statisticsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_REQUEST: 
    return {
      ...state,
      requestAPI: true
    }
    case GET_ALL_SUCCESS:
      const countriesOrdered = payload.sort((a, b) => {
        if (a.country > b.country) return 1;
        else {
          return -1;
        }
      });
      const all = countriesOrdered.filter((country) => country.continent === "All")
      const africa = countriesOrdered.filter((country) => country.continent === "Africa")
      const asia = countriesOrdered.filter((country) => country.continent === "Asia")
      const europe = countriesOrdered.filter((country) => country.continent === "Europe")
      const oceania = countriesOrdered.filter((country) => country.continent === "Oceania")
      const northAmerica = countriesOrdered.filter((country) => country.continent === "North-America")
      const southAmerica = countriesOrdered.filter((country) => country.continent === "South-America")
      const rest = countriesOrdered.filter((country) => !country.continent)
      return {
        ...state,
        loading: false,
        requestAPI: false,
        statistics: [...all, ...africa, ...asia, ...europe, ...oceania, ...northAmerica, ...southAmerica, ...rest],
        filteredStatistics: [...all, ...africa, ...asia, ...europe, ...oceania, ...northAmerica, ...southAmerica, ...rest],
      };
    case GET_ALL_FAILURE: 
      return {
        ...state,
        error: payload
      }
    case COUNTRY_FILTER:
      const countries = state.statistics;
      const countriesFiltered = payload
        ? countries.filter((country) =>
            country.country.toLowerCase().includes(payload.toLowerCase())
          )
        : countries;
      return {
        ...state,
        statistics: countries,
        filteredStatistics: countriesFiltered,
      };
    default:
      return state;
  }
};

export default statisticsReducer;
