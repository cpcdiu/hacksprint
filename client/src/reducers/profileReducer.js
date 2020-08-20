import {
	GET_PROFILE,
	UPDATE_PROFILE,
	ADD_WORK,
	ADD_EDUCATION,
} from "../actions/types";

const initialState = {
	user: {
		email: "",
		last_name: "",
		first_name: "",
		username: "",
	},
	contact: "",
	website: "",
	location: "",
	works_at: "",
	work: [],
	education: [],
};

export default function profileReducer(state = initialState, action) {
	switch (action.type) {
		case GET_PROFILE:
			return action.payload;
		case UPDATE_PROFILE:
			// let updatedProfile = { ...state.profile, ...action.payload };

			return {
				...state,
				...action.payload,
			};
		case ADD_WORK:
			let work = state.work;
			work.push(action.payload);

			return {
				...state,
				work,
			};
		case ADD_EDUCATION:
			let education = state.education;
			education.push(action.payload);

			return {
				...state,
				education,
			};
		default:
			return state;
	}
}
