import React, { Component } from "react";
import { nanoid } from "nanoid";

export default class WorkExperience extends Component {
	state = {
		addMode: false,
		position: "",
		company: "",
		from: "",
		to: "",
	};

	handleAdd = () => {
		this.setState({ addMode: !this.state.addMode });
	};

	handleSaveClick = () => {
		let work = {
			position: this.state.position,
			company: this.state.company,
			started_at: this.state.from,
			end_date: this.state.to,
		};
		this.props.handleAddWork(work);
		this.setState({
			position: "",
			company: "",
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
							<label>Position</label>
							<input
								type="text"
								value={this.state.position}
								name="position"
								placeholder="Ex. Software Engineer"
								onChange={this.handleChange}
							/>
						</div>
						<div className="four wide field">
							<label>Company</label>
							<input
								type="text"
								value={this.state.company}
								name="company"
								placeholder="Compay Name"
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
						<i className="briefcase icon"></i> Work Experience
					</div>
				</div>
				<div className="content">
					<div className="ui feed">
						{this.props.works.map((work) => (
							<div className="event my-1" key={nanoid()}>
								<div className="content">
									<h4 className="m-0">{work.position}</h4>
									<p>
										{work.company} | {work.from} - Present
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
							Add Work Experience
						</button>
					)}
				</div>
			</div>
		);
	}
}
