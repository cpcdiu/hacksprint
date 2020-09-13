import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Navbar from "../../components/Navbar/DashNav";
import Footer from "../../components/Footer/Footer";
import Tab from "./Tab";
import "./challenge_detail.scss";

class ChallengeDetailPage extends Component {
	state = {
		challenge: {},
	};

	componentDidMount() {
		axios
			.get(
				`${process.env.REACT_APP_WEBSITE_NAME}/api/challenges/${this.props.match.params.challengeSlug}/`,
				{
					headers: {
						Authorization: `Token ${this.props.token}`,
					},
				}
			)
			.then((res) => {
				this.setState({ challenge: res.data });
			});
	}

	render() {
		return (
			<>
				<Navbar />
				<div className="pt-4 pb-5 bg-color challenge-detail">
					<div className="container">
						<div className="ui grid">
							<div className="sixteen wide column">
								<div className="cover">
									<div className="shad">
										<h2 className="mb-1">{this.state.challenge.title}</h2>
										<h4 className="my-1">{this.state.challenge.description}</h4>
										<div className="d-flex align-items-center mt-5 intro">
											<div className="host">
												<img
													src="http://cpc.daffodilvarsity.edu.bd/takeoff/img/orgranizer/cpc.png"
													alt="DIU CPC"
													className="img-fluid"
												/>
											</div>
											<div className="point"></div>
											<div className="team-count">861 teams</div>
											<div className="point"></div>
											<div className="status">Ongoing</div>
										</div>
									</div>
								</div>
								<Tab content={this.state.challenge} />
							</div>
						</div>
					</div>
				</div>
				<Footer />
				<style jsx>{`
					.cover {
						background: url("https://www.elmhurst.edu/wp-content/uploads/2019/04/future-of-data-science-illustration-1.jpg");
						background-size: cover;
						background-position: center;
						color: white;
						border-radius: 7px 7px 0px 0px;
						overflow: hidden;
					}

					.shad {
						background: rgba(0, 0, 0, 0.4);
						padding: 30px;
					}

					.intro {
						width: 220px;
						justify-content: space-between;
					}

					.point {
						width: 3px;
						height: 3px;
						background: white;
						border-radius: 50%;
					}

					.host img {
						width: 50px;
						height: auto;
					}
				`}</style>
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		token: state.authReducer.token,
	};
};

export default connect(mapStateToProps)(ChallengeDetailPage);
