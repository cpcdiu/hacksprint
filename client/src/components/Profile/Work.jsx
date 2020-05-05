import React, { Component } from "react";
import { nanoid } from "nanoid";

export default class WorkExperience extends Component {
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
					<button className="ui button right">Add Work Experience</button>
				</div>
			</div>
		);
	}
}
