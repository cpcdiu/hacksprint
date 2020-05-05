import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, authReducer, ...rest }) => (
	<Route
		{...rest}
		render={(props) => {
			if (authReducer.isLoading) {
				return <div></div>;
			} else if (authReducer.isAuthenticated) {
				return <Component {...props} />;
			} else {
				return <Redirect to="/login" />;
			}
		}}
	/>
);

const mapStateToProps = (state) => {
	return {
		authReducer: state.authReducer,
	};
};

export default connect(mapStateToProps)(PrivateRoute);
