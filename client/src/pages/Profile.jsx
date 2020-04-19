import React, { Component } from "react";
import Navbar from "../components/Navbar/DashNav";

export default class Profile extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<div className="pt-4 pb-5 bg-color">
					<div className="container">
						<div className="ui two column grid">
							<div className="four wide column">
								<div className="ui fluid card">
									<a className="image" href="/">
										<img
											src="https://semantic-ui.com/images/avatar/large/steve.jpg"
											alt="dummy"
										/>
									</a>
									<div className="content">
										<a className="header" href="/">
											Steve Jobes
										</a>
										<div className="meta">
											<p className="mb-2">Founder, Apple Inc.</p>
											<div className="d-flex mt-1">
												<i className="map marker alternate icon"></i>
												<p className="pl-1">Dhaka, Bangladesh</p>
											</div>
											<div className="d-flex mt-1">
												<i className="envelope outline icon"></i>
												<p className="pl-1">steve@mail.com</p>
											</div>
											<div className="d-flex mt-1">
												<i className="linkify icon"></i>
												<p className="pl-1">
													<a href="/">www.steve.com</a>
												</p>
											</div>
										</div>
									</div>
								</div>
								<button className="fluid ui button">
									<i className="edit outline icon mr-2"></i> Edit Profile
								</button>
							</div>
							<div className="twelve wide column">
								<div className="work">
									<h2 className="ui header">
										<i className="briefcase icon"></i>
										<div className="content">Work Experience</div>
									</h2>
									<div className="ui placeholder">
										<div className="line"></div>
										<div className="line"></div>
										<div className="line"></div>
										<div className="line"></div>
										<div className="line"></div>
									</div>
								</div>
								<div className="education mt-5">
									<h2 className="ui header">
										<i className="building icon"></i>
										<div className="content">Education</div>
									</h2>
									<div className="ui placeholder">
										<div className="line"></div>
										<div className="line"></div>
										<div className="line"></div>
										<div className="line"></div>
										<div className="line"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
