import { giveMeId } from "utils/helpers";
import {
  CREATE_TODO,
  DELETE_TODO,
  EDIT_TODO,
  SELECT_TODO,
  TOGGLE_TODO,
} from "./actionTypes";

export const createToDo = (title) => {
  return {
    type: CREATE_TODO,
    payload: {
      id: giveMeId(),
      isComplete: false,
      title,
    },
  };
};

export const editTodo = ({ id, title }) => {
  return {
    type: EDIT_TODO,
    payload: {
      id,
      title,
    },
  };
};

export const selectTodo = (id) => {
  return {
    type: SELECT_TODO,
    payload: { id },
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: { id },
  };
};

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: { id },
  };
};
