const initialState = {
	numOfCakes: 10,
};

export default function cakeReducer(state = initialState, action) {
	switch (action.type) {
		case "BUY_CAKE":
			return {
				...state,
				numOfCakes: state.numOfCakes - 1,
			};
		default:
			return state;
	}
}
