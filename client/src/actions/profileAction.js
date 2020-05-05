import axios from "axios";

export function getProfile(token) {
	return function (dispatch) {
		axios
			.get("http://localhost:8000/api/profile/", {
				headers: {
					Authorization: `Token ${token}`,
				},
			})
			.then((res) => {
				let profile = res.data;
				delete profile.id;

				dispatch({
					type: "GET_PROFILE",
					payload: profile,
				});
			})
			.catch((err) => console.log(err, "from profile action"));
	};
}
