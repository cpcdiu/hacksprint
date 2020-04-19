import React, { Component } from "react";
import Navbar from "../components/Navbar/DashNav";

export default class Challenges extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<div className="pt-4 pb-5 bg-color">
					<div className="container">
						<div className="ui two column grid">
							<div className="twelve wide column">
								<div className="challenges">
									<div className="section-title">
										<h2>Featured Challenges</h2>
									</div>
									<div className="ui three cards mt-1">
										<div className="ui card">
											<div className="image">
												<img
													src="https://media-fastly.hackerearth.com/media/hackathon/netapps-women-innovathon-win/images/dea6dbac6c-netapp_Listing.png"
													alt=""
												/>
											</div>
											<div className="content">
												<div className="ui placeholder">
													<div className="header">
														<div className="very short line"></div>
														<div className="medium line"></div>
													</div>
													<div className="paragraph">
														<div className="short line"></div>
													</div>
												</div>
											</div>
											<div className="extra content">
												<div className="ui disabled primary button">
													Start Now
												</div>
											</div>
										</div>
										<div className="ui card">
											<div className="image">
												<img
													src="https://media-fastly.hackerearth.com/media/hackathon/hackerearth-machine-learning-challenge-std-drug-effectiveness/images/2e6bbc9c72-STD_Drug_Listing.png"
													alt=""
												/>
											</div>
											<div className="content">
												<div className="ui placeholder">
													<div className="header">
														<div className="very short line"></div>
														<div className="medium line"></div>
													</div>
													<div className="paragraph">
														<div className="short line"></div>
													</div>
												</div>
											</div>
											<div className="extra content">
												<div className="ui disabled primary button">
													Start Now
												</div>
											</div>
										</div>
										<div className="ui card">
											<div className="image">
												<img
													src="https://media-fastly.hackerearth.com/media/hackathon/arvr-hackathon-1/images/5b541a7e72-Listing_ARVR.png"
													alt=""
												/>
											</div>
											<div className="content">
												<div className="ui placeholder">
													<div className="header">
														<div className="very short line"></div>
														<div className="medium line"></div>
													</div>
													<div className="paragraph">
														<div className="short line"></div>
													</div>
												</div>
											</div>
											<div className="extra content">
												<div className="ui disabled primary button">
													Start Now
												</div>
											</div>
										</div>
										<div className="ui card">
											<div className="image">
												<img
													src="https://media-fastly.hackerearth.com/media/hackathon/cipher-combat-20/images/54b9da0865-Cipher_Combat_2.0_Listing_Image.png"
													alt=""
												/>
											</div>
											<div className="content">
												<div className="ui placeholder">
													<div className="header">
														<div className="very short line"></div>
														<div className="medium line"></div>
													</div>
													<div className="paragraph">
														<div className="short line"></div>
													</div>
												</div>
											</div>
											<div className="extra content">
												<div className="ui disabled primary button">
													Start Now
												</div>
											</div>
										</div>
										<div className="ui card">
											<div className="image">
												<img
													src="https://media-fastly.hackerearth.com/media/hackathon/march-easy-20/images/4701485057-womens_day_-_245x140.png"
													alt=""
												/>
											</div>
											<div className="content">
												<div className="ui placeholder">
													<div className="header">
														<div className="very short line"></div>
														<div className="medium line"></div>
													</div>
													<div className="paragraph">
														<div className="short line"></div>
													</div>
												</div>
											</div>
											<div className="extra content">
												<div className="ui disabled primary button">
													Start Now
												</div>
											</div>
										</div>
										<div className="ui card">
											<div className="image">
												<img
													src="https://media-fastly.hackerearth.com/media/hackathon/hackerearth-hackcovid/images/035621166d-hackCOVID_listing.png"
													alt=""
												/>
											</div>
											<div className="content">
												<div className="ui placeholder">
													<div className="header">
														<div className="very short line"></div>
														<div className="medium line"></div>
													</div>
													<div className="paragraph">
														<div className="short line"></div>
													</div>
												</div>
											</div>
											<div className="extra content">
												<div className="ui disabled primary button">
													Start Now
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="four wide column mt-5">
								<div className="c-type">
									<h4>Challenge Type</h4>
									<div className="wrapper d-flex flex-column">
										<div className="ui checkbox mb-2">
											<input type="checkbox" name="example" />
											<label>Competitive Programming</label>
										</div>
										<div className="ui checkbox mb-2">
											<input type="checkbox" name="example" />
											<label>Hackathon</label>
										</div>
									</div>
								</div>
								<div className="c-topic mt-3">
									<h4>Topic</h4>
									<div className="wrapper d-flex flex-column">
										<div className="ui checkbox mb-2">
											<input type="checkbox" name="example" />
											<label>Web</label>
										</div>
										<div className="ui checkbox mb-2">
											<input type="checkbox" name="example" />
											<label>Android</label>
										</div>
										<div className="ui checkbox mb-2">
											<input type="checkbox" name="example" />
											<label>Cyber Security</label>
										</div>
										<div className="ui checkbox mb-2">
											<input type="checkbox" name="example" />
											<label>UI/UX Design</label>
										</div>
										<div className="ui checkbox mb-2">
											<input type="checkbox" name="example" />
											<label>Machine Learning</label>
										</div>
										<div className="ui checkbox mb-2">
											<input type="checkbox" name="example" />
											<label>IoT</label>
										</div>
										<div className="ui checkbox mb-2">
											<input type="checkbox" name="example" />
											<label>Data Science</label>
										</div>
										<div className="ui checkbox mb-2">
											<input type="checkbox" name="example" />
											<label>Embedded System</label>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
