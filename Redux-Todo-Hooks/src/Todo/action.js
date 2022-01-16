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
import { nanoid } from "nanoid";

export const addTodo = (data) => {
  return {
    type: ADD_TODO,
    payload: data,
    status: false,
    id: nanoid(8),
  };
};

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    status: true,
    payload: id,
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

export const addTodoLoading = () => {
  return {
    type: ADD_TODO_LOADING,
  };
};

export const addTodoSuccess = (data) => {
  return {
    type: ADD_TODO_SUCCESS,
    payload: data,
  };
};

export const addTodoError = (err) => {
  return {
    type: ADD_TODO_ERROR,
    payload: err,
  };
};
export const getTodoError = (err) => {
  return {
    type: GET_TODO_ERROR,
    payload: err,
  };
};

export const getTodoSuccess = (data) => {
  return {
    type: GET_TODO_SUCCESS,
    payload: data,
  };
};
export const getTodoLoading = () => {
  return {
    type: GET_TODO_LOADING,
  };
};
