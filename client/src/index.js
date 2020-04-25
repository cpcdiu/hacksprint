import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "./assets/vendors/bootstrap/bootstrap-utilities.min.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

export const host = "http://localhost:8000";

serviceWorker.unregister();
