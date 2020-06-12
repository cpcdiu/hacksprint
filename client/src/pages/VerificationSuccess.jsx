import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

export default class VerificationSuccess extends Component {
	render() {
		return (
			<Fragment>
				<Navbar />
				<div className="container">
					<div className="row">
						<div className="col-md-6 mx-auto mt-5 pt-5">
							<h1>
								Thank you for your email confirmation. Now you can login your
								account.
							</h1>
							<Link to="/login" className="positive ui button">
								Login
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
