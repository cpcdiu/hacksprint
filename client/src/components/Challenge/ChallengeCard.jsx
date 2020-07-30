import React, { Component } from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";

export default class ChallengeCard extends Component {
	render() {
		let { challenge } = this.props;

		return (
			<>
				<div className="ui card">
					<div
						className="image"
						style={{ height: "144px", overflow: "hidden" }}
					>
						<Link to="/">
							<img
								src={process.env.REACT_APP_WEBSITE_NAME + challenge.thumbnail}
								alt={challenge.desctiption}
								style={{
									display: "block",
									width: "100%",
									height: "144px",
									objectFit: "cover",
								}}
							/>
						</Link>
					</div>
					<Link to="/" className="content" style={{ color: "inherit" }}>
						<div className="header">{challenge.title}</div>
						<div className="meta">
							<div>{challenge.subdomain[0].name}</div>
						</div>
						<div className="ui list">
							<div className="item">
								<i className="clock outline icon"></i>
								<div className="content pl-1">
									<div className="description first-cap">
										<Moment fromNow ago>
											{challenge.end_date}
										</Moment>
										&nbsp; to go
									</div>
								</div>
							</div>
						</div>
					</Link>
					<div className="extra content">
						<div className="d-flex justify-content-between align-items-center">
							<div className="ui primary button">Start Now</div>
							<div className="meta">
								<i className="users icon mr-2"></i>2 Teams
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}
