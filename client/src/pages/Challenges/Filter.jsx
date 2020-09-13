import React, { Component } from "react";
import axios from "axios";
import { Checkbox } from "semantic-ui-react";

export default class Filter extends Component {
	state = {
		domains: null,
		selectedDomain: null,
		selectedSubdomain: [],
	};

	componentDidMount() {
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
				this.props.filterChallenges(challenges);
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
			<>
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
										this.setState(
											{
												selectedDomain: domain.id,
											},
											this.refreshChallenges
										);
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
								.find((domain) => domain.id === this.state.selectedDomain)
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
			</>
		);
	}
}

function SubCheckbox({ label, onChange, id }) {
	return (
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
