import { SEARCH_COUNTRY } from "../actions/types";

const initialState = {
    search: []
}

const searchReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SEARCH_COUNTRY:
            return {
                ...state,
                search: payload
            }
        default:
            return state;
    }
}

export default searchReducer;