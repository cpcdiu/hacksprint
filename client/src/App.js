import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Dashboard from "./pages/Dashboard";
import Challenges from "./pages/Challenges";
import Jobs from "./pages/jobs/Jobs";
import Notification from "./pages/Notification";
import Track from "./pages/Track";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Practice from "./pages/Practice";
import SinglePractice from "./pages/PracticeSingle";
import Playground from "./pages/Playground";
import "./App.scss";
import NotFound from "./pages/404";
import PrivateRoute from "./pages/PrivateRoute";
import { loadUser } from "./actions/authAction";

export default class App extends Component {
	constructor(props) {
		super(props);
		store.dispatch(loadUser());
	}

	// componentDidMount() {
	// 	store.dispatch(loadUser());
	// }

	render() {
		return (
			<Provider store={store}>
				<Router>
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

						<Route exact path="/playground" component={Playground} />

						<Route path="*" component={NotFound} />
					</Switch>
				</Router>
			</Provider>
		);
	}
}
