import axios from "axios";

export function showProfile() {
	return function (dispatch) {
		axios
			.get("http://localhost:8000/api/profile/", {
				headers: {
					Authorization: `Token ${localStorage.getItem("token")}`,
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
