import {
  ADD_TODO,
  ADD_TODO_ERROR,
  ADD_TODO_LOADING,
  ADD_TODO_SUCCESS,
  DELETE_TODO,
  GET_TODO_ERROR,
  GET_TODO_LOADING,
  GET_TODO_SUCCESS,
  TOGGLE_TODO,
} from "./actionTypes";

const init = { loading: false, error: false, todo: [] };
export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todo: [state.todo, payload],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todo: [state.todo, payload],
      };
    case DELETE_TODO:
      const todos = state.todo.filter((item) => item.id !== payload);
      return {
        ...state,
        todo: todos,
      };
    case ADD_TODO_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        todo: [state.todo, payload],
        loading: false,
      };
    case ADD_TODO_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };

    case GET_TODO_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_TODO_SUCCESS:
      return {
        ...state,
        todo: payload,
        loading: false,
      };
    case GET_TODO_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
