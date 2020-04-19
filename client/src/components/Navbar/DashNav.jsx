import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class DashNav extends Component {
	render() {
		return (
			<div
				className="ui sticky inverted menu rounded-0 mb-0"
				style={{ height: "50px" }}
			>
				<div className="container">
					<Link to="/dashboard" className="header item">
						<img
							src="https://hrcdn.net/fcore/assets/brand/h_mark_sm-966d2b45e3.svg"
							alt=""
						/>
					</Link>
					<Link to="/challenges" className="item">
						Challenges
					</Link>
					<Link to="/practice" className="item">
						Practice
					</Link>
					<Link to="/jobs" className="item">
						Jobs
					</Link>

					<div className="right menu align-items-center">
						<div className="item">
							<div className="ui transparent inverted icon input">
								<i className="search icon"></i>
								<input type="text" placeholder="Search" />
							</div>
						</div>
						<Link
							to="/notification"
							className="item"
							style={{ height: "100%" }}
						>
							<i className="bell icon m-0"></i>
						</Link>
						<div className="ui simple dropdown item">
							<img
								src="https://he-s3.s3.amazonaws.com/media/avatars/shakil16/resized/30/6dd0c83shakil.jpg"
								alt=""
							/>
							<i className="dropdown icon"></i>
							<div className="menu">
								<Link className="item" to="/profile">
									Profile
								</Link>
								<Link className="item" to="/settings">
									Settings
								</Link>
								<Link className="item" to="/logout">
									Logout
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
