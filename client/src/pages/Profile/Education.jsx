import React, { Component } from "react";
import { nanoid } from "nanoid";

export default class Education extends Component {
	state = {
		addMode: false,
		subject: "",
		institution: "",
		from: "",
		to: "",
	};

	handleAdd = () => {
		this.setState({ addMode: !this.state.addMode });
	};

	handleSaveClick = () => {
		let education = {
			subject: this.state.subject,
			institution: this.state.institution,
			started_at: this.state.from,
			end_date: this.state.to,
		};
		this.props.handleAddEducation(education);
		this.setState({
			subject: "",
			institution: "",
			from: "",
			to: "",
			addMode: !this.state.addMode,
		});
	};

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	addContent = () => {
		return (
			<div>
				<div className="ui form">
					<div className="fields">
						<div className="four wide field">
							<label>Subject</label>
							<input
								type="text"
								value={this.state.subject}
								name="subject"
								placeholder="BSc. in CSE"
								onChange={this.handleChange}
							/>
						</div>
						<div className="four wide field">
							<label>Institution</label>
							<input
								type="text"
								value={this.state.institution}
								name="institution"
								placeholder="Institution"
								onChange={this.handleChange}
							/>
						</div>
						<div className="four wide field">
							<label>From</label>
							<input
								type="text"
								value={this.state.from}
								name="from"
								placeholder="Ex. 2014-05-24"
								onChange={this.handleChange}
							/>
						</div>
						<div className="four wide field">
							<label>To</label>
							<input
								type="text"
								value={this.state.to}
								name="to"
								placeholder="Ex. 2019-05-24"
								onChange={this.handleChange}
							/>
						</div>
					</div>
				</div>
				<button className="ui positive button" onClick={this.handleSaveClick}>
					Save
				</button>
				<button className="ui negative button" onClick={this.handleAdd}>
					Cancel
				</button>
			</div>
		);
	};

	render() {
		return (
			<div className="ui card w-100">
				<div className="content">
					<div className="header">
						<i className="building icon"></i> Education
					</div>
				</div>
				<div className="content">
					<div className="ui feed">
						{this.props.educations.map((education) => (
							<div className="event" key={nanoid()}>
								<div className="content">
									<h4 className="m-0">{education.subject}</h4>
									<p>
										{education.institution} | {education.from} - 2021
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="extra content">
					{this.state.addMode ? (
						this.addContent()
					) : (
						<button className="ui button right" onClick={this.handleAdd}>
							Add Education History
						</button>
					)}
				</div>
			</div>
		);
	}
}
