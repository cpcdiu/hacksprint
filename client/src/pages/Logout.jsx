import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { LOGOUT } from "../actions/types";

class Logout extends Component {
	componentDidMount() {
		localStorage.removeItem("token");
		this.props.logout();
	}

	render() {
		return <Redirect to="/" />;
	}
}

const mapStateToProps = (state) => {
	return {
		isAuthenticated: state.authReducer.isAuthenticated,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		logout: () =>
			dispatch({
				type: LOGOUT,
			}),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
