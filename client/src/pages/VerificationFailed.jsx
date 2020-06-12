import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

export default class VerificationFailed extends Component {
	render() {
		return (
			<Fragment>
				<Navbar />
				<div className="container">
					<div className="row">
						<div className="col-md-6 mx-auto mt-5 pt-5">
							<h1>Activation link is invalid!</h1>
							<Link to="/" className="ui primary button">
								Home
							</Link>
						</div>
					</div>
				</div>
				<style jsx>{`
					.wrapper {
						height: 100vh;
					}
				`}</style>
			</Fragment>
		);
	}
}
