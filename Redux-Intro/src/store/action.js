import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  INC_COUNT,
  DEC_COUNT,
} from "./actionTypes";

export const addTodo = (data) => ({
  type: ADD_TODO,
    payload: data,
  status:false,
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: id,
});

export const toggleTodo = (data) => ({
  type: TOGGLE_TODO,
  payload: data,
});

export const incCount = (data) => ({
  type: INC_COUNT,
  payload: data,
});

export const decCount = (data) => ({
  type: DEC_COUNT,
  payload: data,
});
