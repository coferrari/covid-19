import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import statisticsReducer from "./statisticsReducer";

const rootReducer = combineReducers({
    search: searchReducer,
    statistics: statisticsReducer
})

export default rootReducer;