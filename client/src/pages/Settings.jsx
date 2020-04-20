import React, { Component } from "react";
import Navbar from "../components/Navbar/DashNav";
import Footer from "../components/Footer/Footer";

export default class Settings extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<div className="py-5 bg-color">
					<div className="container">
						<div className="ui two column grid">
							<div className="four wide column">
								<div className="ui vertical menu">
									<div className="item">
										<div className="header">General</div>
										<div className="menu">
											<a href="/" className="item">
												Account
											</a>
											<a href="/" className="item">
												Team
											</a>
											<a href="/" className="item">
												Security
											</a>
										</div>
									</div>
									<div className="item">
										<div className="header">Preferences</div>
										<div className="menu">
											<a href="/" className="item">
												Email
											</a>
											<a href="/" className="item">
												Language
											</a>
										</div>
									</div>
									<div className="item">
										<div className="header">Notification</div>
										<div className="menu">
											<a href="/" className="item">
												Rails
											</a>
											<a href="/" className="item">
												Python
											</a>
											<a href="/" className="item">
												PHP
											</a>
										</div>
									</div>
									<div className="item">
										<div className="header">Jobs</div>
										<div className="menu">
											<a href="/" className="item">
												Shared
											</a>
											<a href="/" className="item">
												Dedicated
											</a>
											<a href="/" className="item">
												VPS
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="twelve wide column"></div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
