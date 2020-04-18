import React, { Component } from "react";
import Navbar from "../components/Navbar/DashNav";

export default class Practice extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<div className="pt-4 pb-5 bg-color">
					<div class="container">
						<div class="ui two column grid">
							<div class="twelve wide column">
								<div class="tracks">
									<div class="section-title">
										<h2>All Tracks</h2>
									</div>
									<div class="ui three cards mt-1">
										<div class="card">
											<div class="content">
												<div class="ui two column grid">
													<div class="six wide column pr-0">
														<img
															src=""
															class="img-fluid"
															style={{ width: "100%", height: "auto" }}
														/>
													</div>
													<div class="ten wide column">
														<h4 class="mb-2">title</h4>
														<div class="description">desc</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="four wide column">
								<div class="img mt-5">
									<img
										src="https://s3-ap-southeast-1.amazonaws.com/he-public-data/microsoft-azure-java-hackathon-banner911008a.png"
										width="100%"
									/>
								</div>
								<div class="ui vertical menu w-100">
									<a class="item">
										<h4 class="ui header">Promotions</h4>
										<p>Check out our new promotions</p>
									</a>
									<a class="item">
										<h4 class="ui header">Coupons</h4>
										<p>Check out our collection of coupons</p>
									</a>
									<a class="item">
										<h4 class="ui header">Rebates</h4>
										<p>
											Visit our rebate forum for information on claiming rebates
										</p>
									</a>
									<a class="item">
										<h4 class="ui header">Contest</h4>
										<p>
											Visit our rebate forum for information on claiming rebates
										</p>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
