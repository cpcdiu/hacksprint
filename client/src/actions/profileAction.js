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
				let profile = {
					first_name: res.data.user.first_name,
					last_name: res.data.user.last_name,
					email: res.data.user.email,
					works_at: res.data.works_at,
					location: res.data.location,
					contact: res.data.contact,
					website: res.data.website,
				};

				dispatch({
					type: "GET_PROFILE",
					payload: profile,
				});
			})
			.catch((err) => console.log(err, "------------------"));
	};
}
