import { createStore } from "redux";
import stepReducer from "../Steps/StepReducer";


export const store = createStore(stepReducer);

export default store;
