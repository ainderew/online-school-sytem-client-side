import { combineReducers } from "redux";
import userDataReducer from "./userData";
import dashboardReducer from "./dashboardState"

const combinedReducers = combineReducers({
    userData: userDataReducer,
    dashboardState: dashboardReducer
})
export default combinedReducers