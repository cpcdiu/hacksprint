import {
	USER_LOADING,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAILED,
	LOGOUT,
	SIGNUPSTATE,
} from "../actions/types";

const initialState = {
	isAuthenticated: false,
	token: localStorage.getItem("token"),
	isLoading: false,
	user: null,
	signupMsg: "",
};

export default function authReducer(state = initialState, action) {
	switch (action.type) {
		case USER_LOADING:
			return {
				...state,
				isLoading: true,
			};
		case USER_LOADED:
			return {
				...state,
				isAuthenticated: true,
				isLoading: false,
				user: action.payload,
			};
		case AUTH_ERROR:
		case LOGIN_FAILED:
		case LOGOUT:
			localStorage.removeItem("token");
			return {
				...state,
				token: null,
				user: null,
				isAuthenticated: false,
				isLoading: false,
			};
		case LOGIN_SUCCESS:
			localStorage.setItem("token", action.payload.token);
			return {
				...state,
				user: action.payload.user,
				isAuthenticated: true,
				isLoading: false,
				token: action.payload.token,
			};
		case "LOGOUT":
			return {
				...state,
				isAuthenticated: false,
				token: null,
				isLoading: false,
				user: null,
			};
		case SIGNUPSTATE:
			return {
				...state,
				signupMsg: action.payload,
			};
		default:
			return state;
	}
}
