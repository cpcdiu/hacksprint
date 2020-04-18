import React, { Component } from "react";
import Navbar from "../components/Navbar/DashNav";

export default class Profile extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<div class="container py-5 bg-color">
					<div class="ui two column grid">
						<div class="four wide column">
							<div class="ui fluid card">
								<a class="image" href="#">
									<img src="https://semantic-ui.com/images/avatar/large/steve.jpg" />
								</a>
								<div class="content">
									<a class="header" href="#">
										Steve Jobes
									</a>
									<div class="meta">
										<p class="mb-2">Founder, Apple Inc.</p>
										<div class="d-flex mt-1">
											<i class="map marker alternate icon"></i>
											<p class="pl-1">Dhaka, Bangladesh</p>
										</div>
										<div class="d-flex mt-1">
											<i class="envelope outline icon"></i>
											<p class="pl-1">steve@mail.com</p>
										</div>
										<div class="d-flex mt-1">
											<i class="linkify icon"></i>
											<p class="pl-1">
												<a href="#">www.steve.com</a>
											</p>
										</div>
									</div>
								</div>
							</div>
							<button class="fluid ui button">
								<i class="edit outline icon mr-2"></i> Edit Profile
							</button>
						</div>
						<div class="twelve wide column">
							<div class="work">
								<h2 class="ui header">
									<i class="briefcase icon"></i>
									<div class="content">Work Experience</div>
								</h2>
								<div class="ui placeholder">
									<div class="line"></div>
									<div class="line"></div>
									<div class="line"></div>
									<div class="line"></div>
									<div class="line"></div>
								</div>
							</div>
							<div class="education mt-5">
								<h2 class="ui header">
									<i class="building icon"></i>
									<div class="content">Education</div>
								</h2>
								<div class="ui placeholder">
									<div class="line"></div>
									<div class="line"></div>
									<div class="line"></div>
									<div class="line"></div>
									<div class="line"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
