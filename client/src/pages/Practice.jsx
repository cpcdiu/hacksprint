import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/DashNav";
import Footer from "../components/Footer/Footer";

export default class Challenges extends Component {
	state = {
		practices: [],
	};

	componentDidMount() {
		axios
			.get(`http://localhost:8000/tracks/${this.props.match.params.trackId}/`, {
				headers: {
					Authorization: "Token 14c791bb695d794042f05be9044bd964821de246",
				},
			})
			.then((res) => {
				const practices = res.data;
				this.setState({ practices });
			});
	}

	render() {
		return (
			<div>
				<Navbar />
				<div className="pt-4 pb-5 bg-color">
					<div className="container">
						<div className="ui two column grid">
							<div className="twelve wide column">
								<div className="challenges">
									<div className="section-title">
										<h2>Practice</h2>
									</div>
									<div className="ui cards mt-1">
										{this.state.practices.map((practice) => (
											<div className="card w-100">
												<Link
													to={this.props.match.url + "/" + practice.id}
													className="content"
												>
													<div className="header">{practice.title}</div>
													<div className="meta">Friend</div>
													<div className="description">
														lorem ipsum dolor sit amet
													</div>
												</Link>
											</div>
										))}
									</div>
								</div>
							</div>
							<div className="four wide column mt-5">
								<div className="c-type">
									<h4>Challenge Type</h4>
									<div className="wrapper d-flex flex-column">
										<div className="ui checkbox mb-2">
											<input type="checkbox" name="example" />
											<label>Competitive Programming</label>
										</div>
										<div className="ui checkbox mb-2">
											<input type="checkbox" name="example" />
											<label>Hackathon</label>
										</div>
									</div>
								</div>
								<div className="c-topic mt-3">
									<h4>Topic</h4>
									<div className="wrapper d-flex flex-column">
										<div className="ui checkbox mb-2">
											<input type="checkbox" name="example" />
											<label>Web</label>
										</div>
										<div className="ui checkbox mb-2">
											<input type="checkbox" name="example" />
											<label>Android</label>
										</div>
										<div className="ui checkbox mb-2">
											<input type="checkbox" name="example" />
											<label>Cyber Security</label>
										</div>
										<div className="ui checkbox mb-2">
											<input type="checkbox" name="example" />
											<label>UI/UX Design</label>
										</div>
										<div className="ui checkbox mb-2">
											<input type="checkbox" name="example" />
											<label>Machine Learning</label>
										</div>
										<div className="ui checkbox mb-2">
											<input type="checkbox" name="example" />
											<label>IoT</label>
										</div>
										<div className="ui checkbox mb-2">
											<input type="checkbox" name="example" />
											<label>Data Science</label>
										</div>
										<div className="ui checkbox mb-2">
											<input type="checkbox" name="example" />
											<label>Embedded System</label>
										</div>
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

export class SinglePractice extends Component {
	state = {
		data: {},
	};

	componentDidMount() {
		axios
			.get(
				`http://localhost:8000/tracks/${this.props.match.params.trackId}/${this.props.match.params.practiceId}/`,
				{
					headers: {
						Authorization: "Token 14c791bb695d794042f05be9044bd964821de246",
					},
				}
			)
			.then((res) => {
				const data = res.data;
				this.setState({ data });
			});
	}

	render() {
		return (
			<div>
				<Navbar />
				<div className="pt-4 pb-5 bg-color">
					<div className="container">
						<div className="ui two column grid">
							<div className="twelve wide column">
								<div className="challenges">
									<div className="section-title">
										<h2>Practice</h2>
									</div>
									<div class="ui card w-100">
										<div class="content">
											<div class="header">{this.state.data.title}</div>
											<div class="meta">2 days ago</div>
											<div class="description">
												<p>{this.state.data.body}</p>
											</div>
										</div>
										<div class="extra content">
											<i class="check icon"></i>
											121 Votes
										</div>
									</div>
								</div>
							</div>
							<div className="four wide column mt-5">
								<div className="c-type">
									<h4>Challenge Type</h4>
									<div className="wrapper d-flex flex-column">
										<div className="ui checkbox mb-2">
											<input type="checkbox" name="example" />
											<label>Competitive Programming</label>
										</div>
										<div className="ui checkbox mb-2">
											<input type="checkbox" name="example" />
											<label>Hackathon</label>
										</div>
									</div>
								</div>
								<div className="c-topic mt-3">
									<h4>Topic</h4>
									<div className="wrapper d-flex flex-column">
										<div className="ui checkbox mb-2">
											<input type="checkbox" name="example" />
											<label>Web</label>
										</div>
										<div className="ui checkbox mb-2">
											<input type="checkbox" name="example" />
											<label>Android</label>
										</div>
										<div className="ui checkbox mb-2">
											<input type="checkbox" name="example" />
											<label>Cyber Security</label>
										</div>
										<div className="ui checkbox mb-2">
											<input type="checkbox" name="example" />
											<label>UI/UX Design</label>
										</div>
										<div className="ui checkbox mb-2">
											<input type="checkbox" name="example" />
											<label>Machine Learning</label>
										</div>
										<div className="ui checkbox mb-2">
											<input type="checkbox" name="example" />
											<label>IoT</label>
										</div>
										<div className="ui checkbox mb-2">
											<input type="checkbox" name="example" />
											<label>Data Science</label>
										</div>
										<div className="ui checkbox mb-2">
											<input type="checkbox" name="example" />
											<label>Embedded System</label>
										</div>
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
