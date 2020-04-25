const initialState = {
	first_name: "",
	last_name: "",
	email: "",
	works_at: "",
	location: "",
	contact: "",
	website: "",
};

export default function profileReducer(state = initialState, action) {
	switch (action.type) {
		case "GET_PROFILE":
			return {
				...state,
				first_name: action.payload.first_name,
				last_name: action.payload.last_name,
				email: action.payload.email,
				works_at: action.payload.works_at,
				location: action.payload.location,
				contact: action.payload.contact,
				website: action.payload.website,
			};
		default:
			return state;
	}
}
