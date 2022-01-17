import { createStore } from "redux";
import { reducer as jobReducer } from "../Admin/reducer";
export const store = createStore(jobReducer);
