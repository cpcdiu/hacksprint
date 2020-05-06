import axios from "axios";
import { UPDATE_PROFILE, GET_PROFILE, ADD_WORK, ADD_EDUCATION } from "./types";

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
					type: GET_PROFILE,
					payload: profile,
				});
			})
			.catch((err) => console.log(err, "from profile action"));
	};
}

export function updateProfile(token, data) {
	return function (dispatch) {
		axios
			.post("http://localhost:8000/api/profile/", data, {
				headers: {
					Authorization: `Token ${token}`,
				},
			})
			.then((res) => {
				dispatch({
					type: UPDATE_PROFILE,
					payload: res.data,
				});
			})
			.catch((err) => console.log(err, "from update profile action"));
	};
}

export function addWork(token, data) {
	return function (dispatch) {
		axios
			.post("http://localhost:8000/api/addwork/", data, {
				headers: {
					Authorization: `Token ${token}`,
				},
			})
			.then((res) => {
				dispatch({
					type: ADD_WORK,
					payload: res.data,
				});
			})
			.catch((err) => console.log(err));
	};
}

export function addEducation(token, data) {
	return function (dispatch) {
		axios
			.post("http://localhost:8000/api/addeducation/", data, {
				headers: {
					Authorization: `Token ${token}`,
				},
			})
			.then((res) => {
				dispatch({
					type: ADD_EDUCATION,
					payload: res.data,
				});
			})
			.catch((err) => console.log(err));
	};
}
