import {
  ADD_JOBS,
  ADD_JOBS_ERROR,
  ADD_JOBS_LOADING,
  ADD_JOBS_SUCCESS,
  GET_JOBS_ERROR,
  GET_JOBS_LOADING,
  GET_JOBS_SUCCESS,
} from "./actionTypes";

const init = { jobs: [], loading: false, error: false };

export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case ADD_JOBS:
      return {
        ...state,
        jobs: [state.jobs + payload],
      };
    case ADD_JOBS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ADD_JOBS_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case ADD_JOBS_SUCCESS:
      return {
        ...state,
        todo: payload,
      };
    case GET_JOBS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_JOBS_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case GET_JOBS_SUCCESS:
      return {
        ...state,
        todo: payload,
      };

    default:
      return state;
  }
};
