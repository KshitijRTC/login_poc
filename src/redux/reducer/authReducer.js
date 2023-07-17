import { combineReducers } from "redux";
import login from "./loginReducer";
import logout from "./logoutReducer";

export default combineReducers({
    login,
    logout
})