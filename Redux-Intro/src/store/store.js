import { createStore, combineReducers } from "redux";
import { reducer } from "./reducer";
export const store = createStore(reducer)   // initial state withing store or provide initial state on the reducer both are same

// export const rootReducer = createStore({

// })