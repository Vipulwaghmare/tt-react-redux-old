import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import employeeReducer from "./employeeReducer";
import todosReducer from "./todosReducer";

const reducers = combineReducers({
  todos: todosReducer,
  counter: counterReducer,
  employee: employeeReducer,
});

export default reducers;
