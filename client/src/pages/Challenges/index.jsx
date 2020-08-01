import React, { Component, Fragment } from "react";
import axios from "axios";
import { connect } from "react-redux";
import Navbar from "../../components/Navbar/DashNav";
import ChallengeCard from "./Card";
import Filter from "./Filter";
import Footer from "../../components/Footer/Footer";

class ChallengePage extends Component {
	state = {
		challenges: [],
	};

	componentDidMount() {
		axios
			.get(`${process.env.REACT_APP_WEBSITE_NAME}/api/challenges/`, {
				headers: {
					Authorization: `Token ${this.props.token}`,
				},
			})
			.then((res) => {
				const challenges = res.data;
				this.setState({ challenges });
			});
	}

	filterChallenges = (challenges) => {
		this.setState({ challenges });
	};

	render() {
		return (
			<Fragment>
				<Navbar />
				<div className="pt-4 pb-5 bg-color">
					<div className="container">
						<div className="ui two column grid">
							<div className="twelve wide column">
								<div className="challenges">
									<div className="section-title">
										<h2>Featured Challenges</h2>
									</div>
									<div className="ui three cards mt-1">
										{this.state.challenges.map((challenge) => (
											<ChallengeCard
												challenge={challenge}
												key={challenge.id}
												permalink={this.props.match.url + "/" + challenge.slug}
											/>
										))}
									</div>
								</div>
							</div>
							<div className="four wide column mt-5">
								<Filter
									token={this.props.token}
									filterChallenges={this.filterChallenges}
								/>
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		token: state.authReducer.token,
	};
};

export default connect(mapStateToProps)(ChallengePage);
