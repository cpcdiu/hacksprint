import React, { Component } from "react";
import Navbar from "../components/Navbar/DashNav";
import Footer from "../components/Footer/Footer";

export default class Notification extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<div className="py-5 bg-color">
					<div className="container">
						<div className="section-title">
							<h2>Notifications</h2>
						</div>
						<div className="ui very relaxed list mt-5">
							<div className="item">
								<img
									alt="dummy"
									className="ui avatar image"
									src="https://semantic-ui.com/images/avatar/small/daniel.jpg"
								/>
								<div className="content">
									<a href="/" className="header">
										Daniel Louise
									</a>
									<div className="description">
										Last seen watching{" "}
										<a href="/">
											<b>Arrested Development</b>
										</a>{" "}
										just now.
									</div>
								</div>
							</div>
							<div className="item">
								<img
									alt="dummy"
									className="ui avatar image"
									src="https://semantic-ui.com/images/avatar/small/stevie.jpg"
								/>
								<div className="content">
									<a href="/" className="header">
										Stevie Feliciano
									</a>
									<div className="description">
										Last seen watching{" "}
										<a href="/">
											<b>Bob's Burgers</b>
										</a>{" "}
										10 hours ago.
									</div>
								</div>
							</div>
							<div className="item">
								<img
									alt="dummy"
									className="ui avatar image"
									src="https://semantic-ui.com/images/avatar/small/elliot.jpg"
								/>
								<div className="content">
									<a href="/" className="header">
										Elliot Fu
									</a>
									<div className="description">
										Last seen watching{" "}
										<a href="/">
											<b>The Godfather Part 2</b>
										</a>{" "}
										yesterday.
									</div>
								</div>
							</div>
							<div className="item">
								<img
									alt="dummy"
									className="ui avatar image"
									src="https://semantic-ui.com/images/avatar/small/daniel.jpg"
								/>
								<div className="content">
									<a href="/" className="header">
										Daniel Louise
									</a>
									<div className="description">
										Last seen watching{" "}
										<a href="/">
											<b>Arrested Development</b>
										</a>{" "}
										just now.
									</div>
								</div>
							</div>
							<div className="item">
								<img
									alt="dummy"
									className="ui avatar image"
									src="https://semantic-ui.com/images/avatar/small/stevie.jpg"
								/>
								<div className="content">
									<a href="/" className="header">
										Stevie Feliciano
									</a>
									<div className="description">
										Last seen watching{" "}
										<a href="/">
											<b>Bob's Burgers</b>
										</a>{" "}
										10 hours ago.
									</div>
								</div>
							</div>
							<div className="item">
								<img
									alt="dummy"
									className="ui avatar image"
									src="https://semantic-ui.com/images/avatar/small/elliot.jpg"
								/>
								<div className="content">
									<a href="/" className="header">
										Elliot Fu
									</a>
									<div className="description">
										Last seen watching{" "}
										<a href="/">
											<b>The Godfather Part 2</b>
										</a>{" "}
										yesterday.
									</div>
								</div>
							</div>
							<div className="item">
								<img
									alt="dummy"
									className="ui avatar image"
									src="https://semantic-ui.com/images/avatar/small/daniel.jpg"
								/>
								<div className="content">
									<a href="/" className="header">
										Daniel Louise
									</a>
									<div className="description">
										Last seen watching{" "}
										<a href="/">
											<b>Arrested Development</b>
										</a>{" "}
										just now.
									</div>
								</div>
							</div>
							<div className="item">
								<img
									alt="dummy"
									className="ui avatar image"
									src="https://semantic-ui.com/images/avatar/small/stevie.jpg"
								/>
								<div className="content">
									<a href="/" className="header">
										Stevie Feliciano
									</a>
									<div className="description">
										Last seen watching{" "}
										<a href="/">
											<b>Bob's Burgers</b>
										</a>{" "}
										10 hours ago.
									</div>
								</div>
							</div>
							<div className="item">
								<img
									alt="dummy"
									className="ui avatar image"
									src="https://semantic-ui.com/images/avatar/small/elliot.jpg"
								/>
								<div className="content">
									<a href="/" className="header">
										Elliot Fu
									</a>
									<div className="description">
										Last seen watching
										<a href="/">
											<b>The Godfather Part 2</b>
										</a>
										yesterday.
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
