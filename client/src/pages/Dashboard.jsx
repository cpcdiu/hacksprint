import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from "../components/Navbar/DashNav";
import Footer from "../components/Footer/Footer";
import AdOne from "../components/Ad/AdOne";
import Sidebar from "../components/Sidebar/Sidebar";
import Tracks from "./Track/Tracks";

class Dashboard extends Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<main className="pt-4 pb-5 bg-color">
					<div className="container">
						<div className="ui two column grid pb-5">
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
									</div>
								</div>
								<div className="tracks pt-4">
									<div className="section-title">
										<h2>All Tracks</h2>
										<Tracks token={this.props.token} />
									</div>
								</div>
							</div>
							<div className="four wide column mt-5">
								<AdOne />
								<Sidebar />
							</div>
						</div>
					</div>
				</main>
				<Footer />
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		token: state.authReducer.token,
	};
};

export default connect(mapStateToProps)(Dashboard);
