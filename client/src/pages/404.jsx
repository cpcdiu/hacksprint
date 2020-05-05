import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NotFound extends Component {
	render() {
		return (
			<section
				className="page_404"
				style={{
					padding: "40px 0",
					background: "#fff",
					fontFamily: "Arvo",
				}}
			>
				<div className="container">
					<div className="row">
						<div className="col-sm-12 ">
							<div className="col-sm-10 mx-auto  text-center">
								<div className="four_zero_four_bg">
									<h1 className="text-center ">404</h1>
								</div>

								<div className="contant_box_404">
									<p
										style={{ fontSize: "30px", fontFamily: "Arvo" }}
										className="mb-2"
									>
										Look like you're lost
									</p>

									<p>the page you are looking for not available!</p>

									<Link to="/" className="link_404">
										Go to Home
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
