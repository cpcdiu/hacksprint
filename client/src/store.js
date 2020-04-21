import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import cakeReducer from "./reducers/cakeReducer";
import profileReducer from "./reducers/profileReducer";

const rootReducer = combineReducers({
	cakeReducer,
	profileReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
