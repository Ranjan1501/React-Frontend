import { ADD_JOBS, ADD_JOBS_LOADING, ADD_JOBS_SUCCESS } from "./actionTypes"

export const addJobs = (data) => ({
    type: ADD_JOBS,
        payload: data,
});

export const addJobsLoading = () => ({
    type: ADD_JOBS_LOADING,
});

export const addJobsSuccess = (data) => ({
    type: ADD_JOBS_SUCCESS,
        payload: data,  
}); 