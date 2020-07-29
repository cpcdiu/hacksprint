import React, { Component, Fragment } from "react";
import axios from "axios";
import { Checkbox } from "semantic-ui-react";
import { connect } from "react-redux";
import Moment from "react-moment";
import Navbar from "../components/Navbar/DashNav";
import Footer from "../components/Footer/Footer";

class ChallengePage extends Component {
	state = {
		challenges: [],
		domains: null,
		selectedDomain: 1,
		selectedSubdomain: [],
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

		axios
			.get(`${process.env.REACT_APP_WEBSITE_NAME}/api/challenges/domains/`, {
				headers: {
					Authorization: `Token ${this.props.token}`,
				},
			})
			.then((res) => {
				const domains = res.data;
				var selectedDomain = domains.find((domain) => domain.default_selected);
				this.setState({ domains, selectedDomain: selectedDomain.id });
			});
	}

	refreshChallenges = () => {
		var data = {
			domain: this.state.selectedDomain,
			subdomain: this.state.selectedSubdomain,
		};

		axios
			.post(`${process.env.REACT_APP_WEBSITE_NAME}/api/challenges/`, data, {
				headers: {
					Authorization: `Token ${this.props.token}`,
				},
			})
			.then((res) => {
				const challenges = res.data;
				this.setState({ challenges });
			});
	};

	handleSubdomainChange = (event) => {
		const target = event.target;
		var value = target.value;

		if (target.checked) {
			this.setState(
				{
					selectedSubdomain: [...this.state.selectedSubdomain, value],
				},
				this.refreshChallenges
			);
		} else {
			this.setState(
				{
					selectedSubdomain: this.state.selectedSubdomain.filter(
						(item) => item !== value
					),
				},
				this.refreshChallenges
			);
		}
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
											<div className="ui card" key={challenge.id}>
												<div
													className="image"
													style={{ height: "144px", overflow: "hidden" }}
												>
													<img
														src={
															process.env.REACT_APP_WEBSITE_NAME +
															challenge.thumbnail
														}
														alt={challenge.desctiption}
														style={{
															display: "block",
															width: "100%",
															height: "144px",
															objectFit: "cover",
														}}
													/>
												</div>
												<div className="content">
													<div className="header">{challenge.title}</div>
													<div className="meta">
														<div>{challenge.subdomain[0].name}</div>
													</div>
													<div className="ui list">
														<div className="item">
															<i className="clock outline icon"></i>
															<div className="content">
																<div className="description first-cap">
																	<Moment fromNow ago>
																		{challenge.end_date}
																	</Moment>
																	&nbsp; to go
																</div>
															</div>
														</div>
													</div>
												</div>
												<div className="extra content">
													<div className="d-flex justify-content-between align-items-center">
														<div className="ui primary button">Start Now</div>
														<a href="/">
															<i className="users icon"></i>2 Teams
														</a>
													</div>
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
							<div className="four wide column mt-5">
								<div className="c-type">
									<h4>Challenge Type</h4>
									<div className="wrapper d-flex flex-column">
										{this.state.domains &&
											this.state.domains.map((domain) => (
												<Checkbox
													label={{ children: domain.name }}
													checked={this.state.selectedDomain === domain.id}
													className="mb-2"
													key={domain.id}
													onChange={() => {
														this.setState({
															selectedDomain: domain.id,
														});
													}}
												/>
											))}
									</div>
								</div>
								<div className="c-topic mt-3">
									<h4>Topic</h4>
									<div className="wrapper d-flex flex-column">
										{this.state.domains &&
											this.state.domains
												.find(
													(domain) => domain.id === this.state.selectedDomain
												)
												.subdomain.map((subdomain) => (
													<SubCheckbox
														label={subdomain.name}
														id={subdomain.id}
														className="mb-2"
														key={subdomain.id}
														onChange={this.handleSubdomainChange}
													/>
												))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</Fragment>
		);
	}
}

function SubCheckbox({ label, onChange, id }) {
	return (
		// <div>
		// 	<input
		// 		type="checkbox"
		// 		name="selectedSubdomain"
		// 		id={"check" + id}
		// 		value={id}
		// 		onChange={onChange}
		// 	/>
		// 	<label htmlFor={"check" + id}>{label}</label>
		// </div>
		<div className="ui checkbox mb-2" key={id}>
			<input
				type="checkbox"
				name="selectedSubdomain"
				value={id}
				id={"check" + id}
				onChange={onChange}
			/>
			<label style={{ cursor: "pointer" }} htmlFor={"check" + id}>
				{label}
			</label>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		token: state.authReducer.token,
	};
};

export default connect(mapStateToProps)(ChallengePage);
