const initialState = {
	isLoading: true,
};

export default function appStateReducer(state = initialState, action) {
	switch (action.type) {
		case "IS_LOADING":
			return {
				...state,
				isLoading: true,
			};
		case "IS_LOADED":
			return {
				...state,
				isLoading: false,
			};
		default:
			return state;
	}
}
