import { createStore } from "redux";
import cakeReducer from "./reducers/cakeReducer";

const store = createStore(cakeReducer);

export default store;
