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
				<PrivateRoute exact path="/dashboard">
					<Dashboard />
				</PrivateRoute>
				<PrivateRoute exact path="/challenges">
					<Challenges />
				</PrivateRoute>
				<PrivateRoute exact path="/jobs">
					<Jobs />
				</PrivateRoute>
				<PrivateRoute exact path="/notification">
					<Notification />
				</PrivateRoute>
				<PrivateRoute exact path="/tracks">
					<Track />
				</PrivateRoute>
				<PrivateRoute exact path="/tracks/:trackId">
					<Practice />
				</PrivateRoute>
				<PrivateRoute exact path="/tracks/:trackId/:practiceId">
					<SinglePractice />
				</PrivateRoute>
				<PrivateRoute exact path="/profile">
					<Profile />
				</PrivateRoute>
				<PrivateRoute exact path="/settings">
					<Settings />
				</PrivateRoute>
			</Switch>
		</div>
	);
}

export default App;

function PrivateRoute({ children, ...rest }) {
	return (
		<Route
			{...rest}
			render={({ location }) =>
				localStorage.getItem("token") ? (
					children
				) : (
					<Redirect
						to={{
							pathname: "/login",
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
}
