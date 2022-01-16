import { createStore } from "redux";
import { reducer as TodoReducer } from "../Todo/reducer";

export const store = createStore(TodoReducer);

console.log("Entire store:", store.getState());
