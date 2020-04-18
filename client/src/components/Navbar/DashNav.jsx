import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class DashNav extends Component {
	render() {
		return (
			<div
				class="ui sticky inverted menu rounded-0 mb-0"
				style={{ height: "50px" }}
			>
				<div class="container">
					<Link to="/dashboard" class="header item">
						<img
							src="https://hrcdn.net/fcore/assets/brand/h_mark_sm-966d2b45e3.svg"
							alt=""
						/>
					</Link>
					<Link to="/challenges" class="item">
						Challenges
					</Link>
					<Link to="/practice" class="item">
						Practice
					</Link>
					<Link to="/jobs" class="item">
						Jobs
					</Link>

					<div class="right menu align-items-center">
						<div class="item">
							<div class="ui transparent inverted icon input">
								<i class="search icon"></i>
								<input type="text" placeholder="Search" />
							</div>
						</div>
						<Link to="/notification" class="item" style={{ height: "100%" }}>
							<i class="bell icon m-0"></i>
						</Link>
						<div class="ui simple dropdown item">
							<img
								src="https://he-s3.s3.amazonaws.com/media/avatars/shakil16/resized/30/6dd0c83shakil.jpg"
								alt=""
							/>
							<i class="dropdown icon"></i>
							<div class="menu">
								<Link class="item" to="/profile">
									Profile
								</Link>
								<Link class="item" to="/settings">
									Settings
								</Link>
								<Link class="item" to="/logout">
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
