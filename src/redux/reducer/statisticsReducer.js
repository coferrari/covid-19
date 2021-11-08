import { GET_ALL } from "../actions/types";

const initialState = {
    statistics: []
}

const statisticsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL:
            return {
                ...state,
                statistics: payload
            }
        default:
            return state;
    }
}

export default statisticsReducer;