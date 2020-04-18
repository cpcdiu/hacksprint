import React, { Component } from "react";
import Navbar from "../components/Navbar/DashNav";
import webThumb from "../assets/img/web.jpg";
import mobileThumb from "../assets/img/mobile.jpg";
import dataThumb from "../assets/img/ds.jpg";
import gameThumb from "../assets/img/game.jpg";
import uiThumb from "../assets/img/ui-1.jpg";
import cyberThumb from "../assets/img/security.jpg";

export default class Dashboard extends Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<main className="pt-4 pb-5 bg-color">
					<div class="container">
						<div class="ui two column grid pb-5">
							<div class="twelve wide column">
								<div class="challenges">
									<div class="section-title">
										<h2>Featured Challenges</h2>
									</div>
									<div class="ui three cards mt-1">
										<div class="ui card">
											<div class="image">
												<img
													src="https://media-fastly.hackerearth.com/media/hackathon/netapps-women-innovathon-win/images/dea6dbac6c-netapp_Listing.png"
													alt=""
												/>
											</div>
											<div class="content">
												<div class="ui placeholder">
													<div class="header">
														<div class="very short line"></div>
														<div class="medium line"></div>
													</div>
													<div class="paragraph">
														<div class="short line"></div>
													</div>
												</div>
											</div>
											<div class="extra content">
												<div class="ui disabled primary button">Start Now</div>
											</div>
										</div>
										<div class="ui card">
											<div class="image">
												<img
													src="https://media-fastly.hackerearth.com/media/hackathon/hackerearth-machine-learning-challenge-std-drug-effectiveness/images/2e6bbc9c72-STD_Drug_Listing.png"
													alt=""
												/>
											</div>
											<div class="content">
												<div class="ui placeholder">
													<div class="header">
														<div class="very short line"></div>
														<div class="medium line"></div>
													</div>
													<div class="paragraph">
														<div class="short line"></div>
													</div>
												</div>
											</div>
											<div class="extra content">
												<div class="ui disabled primary button">Start Now</div>
											</div>
										</div>
										<div class="ui card">
											<div class="image">
												<img
													src="https://media-fastly.hackerearth.com/media/hackathon/arvr-hackathon-1/images/5b541a7e72-Listing_ARVR.png"
													alt=""
												/>
											</div>
											<div class="content">
												<div class="ui placeholder">
													<div class="header">
														<div class="very short line"></div>
														<div class="medium line"></div>
													</div>
													<div class="paragraph">
														<div class="short line"></div>
													</div>
												</div>
											</div>
											<div class="extra content">
												<div class="ui disabled primary button">Start Now</div>
											</div>
										</div>
									</div>
								</div>
								<div class="tracks pt-4">
									<div class="section-title">
										<h2>All Tracks</h2>
									</div>
									<div class="ui three cards mt-1">
										<div class="card">
											<div class="content">
												<div class="ui two column grid">
													<div class="six wide column pr-0">
														<img
															src={webThumb}
															alt="web"
															class="img-fluid"
															style={{ width: "100%", height: "auto" }}
														/>
													</div>
													<div class="ten wide column">
														<h4 class="mb-2">Web Development</h4>
														<div class="description">
															Elliot Fu is a film-maker from New York.
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="card">
											<div class="content">
												<div class="ui two column grid">
													<div class="six wide column pr-0">
														<img
															src={mobileThumb}
															alt="mobile"
															class="img-fluid"
															style={{ width: "100%", height: "auto" }}
														/>
													</div>
													<div class="ten wide column">
														<h4 class="mb-2">Mobile Development</h4>
														<div class="description">
															Elliot Fu is a film-maker from New York.
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="card">
											<div class="content">
												<div class="ui two column grid">
													<div class="six wide column pr-0">
														<img
															src={dataThumb}
															alt="web"
															class="img-fluid"
															style={{ width: "100%", height: "auto" }}
														/>
													</div>
													<div class="ten wide column">
														<h4 class="mb-2">Data Science</h4>
														<div class="description">
															Elliot Fu is a film-maker from New York.
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="card">
											<div class="content">
												<div class="ui two column grid">
													<div class="six wide column pr-0">
														<img
															src={gameThumb}
															alt="game"
															class="img-fluid"
															style={{ width: "100%", height: "auto" }}
														/>
													</div>
													<div class="ten wide column">
														<h4 class="mb-2">Game Development</h4>
														<div class="description">
															Elliot Fu is a film-maker from New York.
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="card">
											<div class="content">
												<div class="ui two column grid">
													<div class="six wide column pr-0">
														<img
															src={uiThumb}
															alt="ui"
															class="img-fluid"
															style={{ width: "100%", height: "auto" }}
														/>
													</div>
													<div class="ten wide column">
														<h4 class="mb-2">UI/UX Design</h4>
														<div class="description">
															Elliot Fu is a film-maker from New York.
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="card">
											<div class="content">
												<div class="ui two column grid">
													<div class="six wide column pr-0">
														<img
															src={cyberThumb}
															alt="web"
															class="img-fluid"
															style={{ width: "100%", height: "auto" }}
														/>
													</div>
													<div class="ten wide column">
														<h4 class="mb-2">Cyber Security</h4>
														<div class="description">
															Elliot Fu is a film-maker from New York.
														</div>
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
				</main>
			</React.Fragment>
		);
	}
}
