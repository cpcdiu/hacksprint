import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login, { Logout } from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Challenges from "./pages/Challenges";
import Jobs from "./pages/jobs/Jobs";
import Notification from "./pages/Notification";
import Track from "./pages/Track";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Practice from "./pages/Practice";
import { SinglePractice } from "./pages/Practice";
import "./App.scss";

function App() {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/register" component={Register} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/logout" component={Logout} />
				<PrivateRoute exact path="/dashboard" component={Dashboard} />
				<PrivateRoute exact path="/challenges" component={Challenges} />
				<PrivateRoute exact path="/jobs" component={Jobs} />
				<PrivateRoute exact path="/notification" component={Notification} />
				<PrivateRoute exact path="/tracks" component={Track} />
				<PrivateRoute exact path="/tracks/:trackId" component={Practice} />
				<PrivateRoute
					exact
					path="/tracks/:trackId/:practiceId"
					component={SinglePractice}
				/>
				<PrivateRoute exact path="/profile" component={Profile} />
				<PrivateRoute exact path="/settings" component={Settings} />
			</Switch>
		</div>
	);
}

export default App;

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={(props) => {
			if (localStorage.getItem("token")) {
				return <Component {...props} />;
			} else {
				return <Redirect to="/login" />;
			}
		}}
	/>
);
