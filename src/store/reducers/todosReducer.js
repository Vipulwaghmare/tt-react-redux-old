import {
  CREATE_TODO,
  DELETE_TODO,
  EDIT_TODO,
  SELECT_TODO,
  TOGGLE_TODO,
} from "store/actions";

const initialState = {
  todos: [],
  selected: null,
};

const todosReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_TODO:
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === payload.id) {
            return { ...todo, ...payload };
          }
          return todo;
        }),
      };
    case SELECT_TODO:
      return {
        ...state,
        selected:
          payload.id === null
            ? null
            : state.todos.find((todo) => todo.id === payload.id),
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === payload.id) {
            return { ...todo, isComplete: !todo.isComplete };
          }
          return todo;
        }),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload.id),
      };
    default:
      return state;
  }
};

export default todosReducer;
