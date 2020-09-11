import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import todos from "./todos";

// dump the todos action to store
export default combineReducers({ todos, visibilityFilter });
