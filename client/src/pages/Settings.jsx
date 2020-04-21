import React, { Component } from "react";
import Navbar from "../components/Navbar/DashNav";
import Footer from "../components/Footer/Footer";

export default class Settings extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<div className="py-5 bg-color">
					<div className="container">
						<div className="ui two column grid">
							<div className="three wide column">
								<div className="ui vertical menu">
									<div className="item">
										<div className="header">General</div>
										<div className="menu">
											<a href="/" className="item">
												Account
											</a>
											<a href="/" className="item">
												Team
											</a>
											<a href="/" className="item">
												Security
											</a>
										</div>
									</div>
									<div className="item">
										<div className="header">Preferences</div>
										<div className="menu">
											<a href="/" className="item">
												Email
											</a>
											<a href="/" className="item">
												Language
											</a>
										</div>
									</div>
									<div className="item">
										<div className="header">Notification</div>
										<div className="menu">
											<a href="/" className="item">
												Rails
											</a>
											<a href="/" className="item">
												Python
											</a>
											<a href="/" className="item">
												PHP
											</a>
										</div>
									</div>
									<div className="item">
										<div className="header">Jobs</div>
										<div className="menu">
											<a href="/" className="item">
												Shared
											</a>
											<a href="/" className="item">
												Dedicated
											</a>
											<a href="/" className="item">
												VPS
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="thirteen wide column">
								<div className="ml-4">
									<div className="ui card w-100">
										<div className="content">
											<div className="header">some title</div>
											<div className="meta">2 days ago</div>
											<div className="description">
												<p>
													Lorem ipsum dolor, sit amet consectetur adipisicing
													elit. Tenetur, provident beatae! Id architecto, porro
													inventore alias, quis consectetur aliquid tenetur
													perspiciatis atque in nihil sed magnam necessitatibus
													rerum obcaecati possimus nesciunt quibusdam quasi
													soluta illum dolorem magni saepe odit. Inventore
													nesciunt officiis praesentium cum enim tempora
													recusandae, animi consectetur alias.
												</p>
												<p>
													Lorem ipsum dolor, sit amet consectetur adipisicing
													elit. Tenetur, provident beatae! Id architecto, porro
													inventore alias, quis consectetur aliquid tenetur
													perspiciatis atque in nihil sed magnam necessitatibus
													rerum obcaecati possimus nesciunt quibusdam quasi
													soluta illum dolorem magni saepe odit. Inventore
													nesciunt officiis praesentium cum enim tempora
													recusandae, animi consectetur alias.
												</p>
												<p>
													Lorem ipsum dolor, sit amet consectetur adipisicing
													elit. Tenetur, provident beatae! Id architecto, porro
													inventore alias, quis consectetur aliquid tenetur
													perspiciatis atque in nihil sed magnam necessitatibus
													rerum obcaecati possimus nesciunt quibusdam quasi
													soluta illum dolorem magni saepe odit. Inventore
													nesciunt officiis praesentium cum enim tempora
													recusandae, animi consectetur alias.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
