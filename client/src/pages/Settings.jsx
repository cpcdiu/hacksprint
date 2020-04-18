import React, { Component } from "react";
import Navbar from "../components/Navbar/DashNav";

export default class Settings extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<div class="py-5 bg-color">
					<div class="container">
						<div class="ui two column grid">
							<div class="four wide column">
								<div class="ui vertical menu">
									<div class="item">
										<div class="header">General</div>
										<div class="menu">
											<a class="item">Account</a>
											<a class="item">Team</a>
											<a class="item">Security</a>
										</div>
									</div>
									<div class="item">
										<div class="header">Preferences</div>
										<div class="menu">
											<a class="item">Email</a>
											<a class="item">Language</a>
										</div>
									</div>
									<div class="item">
										<div class="header">Notification</div>
										<div class="menu">
											<a class="item">Rails</a>
											<a class="item">Python</a>
											<a class="item">PHP</a>
										</div>
									</div>
									<div class="item">
										<div class="header">Jobs</div>
										<div class="menu">
											<a class="item">Shared</a>
											<a class="item">Dedicated</a>
											<a class="item">VPS</a>
										</div>
									</div>
								</div>
							</div>
							<div class="twelve wide column"></div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
