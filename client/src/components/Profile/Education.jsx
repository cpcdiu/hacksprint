import React, { Component } from "react";
import { nanoid } from "nanoid";

export default class Education extends Component {
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
					<button className="ui button">Add Education History</button>
				</div>
			</div>
		);
	}
}
