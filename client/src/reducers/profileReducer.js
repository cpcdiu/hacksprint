const initialState = {
	first_name: "",
	last_name: "",
	email: "",
};

export default function profileReducer(state = initialState, action) {
	switch (action.type) {
		case "SHOW_PROFILE":
			return {
				...state,
				first_name: action.payload.first_name,
				last_name: action.payload.last_name,
				email: action.payload.email,
			};
		default:
			return state;
	}
}
