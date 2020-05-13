import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Challenges from "./Challenges";
import Jobs from "./jobs/Jobs";
import Notification from "./Notification";
import Track from "./Track";
import Profile from "./Profile";
import Settings from "./Settings";
import Practice from "./Practice";
import SinglePractice from "./PracticeSingle";

export default class UserPanel extends Component {
	render() {
		return (
			<div>
				<Switch>
					<Route exact path="/dashboard" component={Dashboard} />
					<Route exact path="/challenges" component={Challenges} />
					<Route exact path="/jobs" component={Jobs} />
					<Route exact path="/notification" component={Notification} />
					<Route exact path="/tracks" component={Track} />
					<Route exact path="/tracks/:trackId" component={Practice} />
					<Route
						exact
						path="/tracks/:trackId/:practiceId"
						component={SinglePractice}
					/>
					<Route exact path="/profile" component={Profile} />
					<Route exact path="/settings" component={Settings} />
				</Switch>
			</div>
		);
	}
}
