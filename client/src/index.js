import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store";
import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "./assets/vendors/bootstrap/bootstrap-utilities.min.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById("root")
);

serviceWorker.unregister();
