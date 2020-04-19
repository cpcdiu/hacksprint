import React, { Component } from "react";

export default class SingleTrack extends Component {
	render() {
		return (
			<div className="card">
				<div className="content">
					<div className="ui two column grid">
						<div className="six wide column pr-0">
							<img
								src={this.props.track.avatar}
								className="img-fluid"
								style={{ width: "100%", height: "auto" }}
								alt="dummy"
							/>
						</div>
						<div className="ten wide column">
							<h4 className="mb-2">{this.props.track.title}</h4>
							<div className="description">{this.props.track.desc}</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
