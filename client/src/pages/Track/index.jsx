import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from "../../components/Navbar/DashNav";
import Tracks from "./Tracks";
import AdOne from "../../components/Ad/AdOne";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";

class Track extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<div className="pt-4 pb-5 bg-color">
					<div className="container">
						<div className="ui two column grid">
							<div className="twelve wide column">
								<div className="tracks">
									<div className="section-title">
										<h2>All Tracks</h2>
									</div>
									<Tracks token={this.props.token} />
								</div>
							</div>
							<div className="four wide column mt-5">
								<AdOne />
								<Sidebar />
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		token: state.authReducer.token,
	};
};

export default connect(mapStateToProps)(Track);
