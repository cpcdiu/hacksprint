import React, { Component } from "react";
import Navbar from "../components/Navbar/DashNav";
import Footer from "../components/Footer/Footer";
import axios from "axios";

export default class Profile extends Component {
	state = {
		profile: {},
	};

	componentDidMount() {
		axios
			.get("http://localhost:8000/profile/", {
				headers: {
					Authorization: "Token 14c791bb695d794042f05be9044bd964821de246",
				},
			})
			.then((res) => {
				const profile = res.data;
				this.setState({ profile });
			});
	}

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
										<div className="header">
											{this.state.profile.first_name +
												" " +
												this.state.profile.last_name}
										</div>
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
								<div className="ui card w-100">
									<div className="content">
										<div className="header">
											<i className="briefcase icon"></i> Work Experience
										</div>
									</div>
									<div className="content">
										<div className="ui feed">
											<div className="event">
												<div className="content">
													<h4 className="m-0">Backend Engineer</h4>
													<p>Traveloka | 2017 - Present</p>
												</div>
											</div>
											<div className="event">
												<div className="content">
													<h4 className="m-0">
														Challenge Curator and Software Engineer
													</h4>
													<p>Hacksprint | 2014 - 2017</p>
												</div>
											</div>
										</div>
									</div>
									<div className="extra content">
										<button className="ui button right">
											Add Work Experience
										</button>
									</div>
								</div>
								<div className="ui card w-100">
									<div className="content">
										<div className="header">
											<i className="building icon"></i> Education
										</div>
									</div>
									<div className="content">
										<div className="ui feed">
											<div className="event">
												<div className="content">
													<h4 className="m-0">BSc. in CSE</h4>
													<p>DIU | 2017 - 2021</p>
												</div>
											</div>
											<div className="event">
												<div className="content">
													<h4 className="m-0">HSC</h4>
													<p>BMARPC | 2014 - 2016</p>
												</div>
											</div>
										</div>
									</div>
									<div className="extra content">
										<button className="ui button">Add Education History</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
