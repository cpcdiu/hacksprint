import axios from "axios";

export function showProfile() {
	return function (dispatch) {
		axios
			.get("http://localhost:8000/profile/", {
				headers: {
					Authorization: "Token ff3df94d922c3d239f5751c21c4e0a9b53144b7c",
				},
			})
			.then((res) => res.data)
			.then((profile) => {
				dispatch({
					type: "SHOW_PROFILE",
					payload: profile,
				});
			});
	};
}
