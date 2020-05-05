const initialState = {
	profile: {
		user: {
			email: "",
			last_name: "",
			first_name: "",
			username: "",
		},
		work: [],
		contact: "",
		website: "",
		location: "",
		works_at: "",
		education: [],
	},
};

export default function profileReducer(state = initialState, action) {
	switch (action.type) {
		case "GET_PROFILE":
			return {
				...state,
				profile: action.payload,
			};
		default:
			return state;
	}
}
