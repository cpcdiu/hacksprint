import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
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

export default App;
