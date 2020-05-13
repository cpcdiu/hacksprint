import React, { Component } from "react";
import axios from "axios";
import { nanoid } from "nanoid";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/DashNav";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/Sidebar/Sidebar";

class SinglePractice extends Component {
	state = {
		data: {},
		author: {},
	};

	componentDidMount() {
		axios
			.get(
				`${process.env.REACT_APP_WEBSITE_NAME}api/tracks/${this.props.match.params.trackId}/${this.props.match.params.practiceId}/`,
				{
					headers: {
						Authorization: `Token ${this.props.token}`,
					},
				}
			)
			.then((res) => {
				const data = res.data;
				this.setState({ data });

				return axios.get(
					`${process.env.REACT_APP_WEBSITE_NAME}api/profile/${this.state.data.author}`,
					{
						headers: {
							Authorization: `Token ${this.props.token}`,
						},
					}
				);
			})
			.then((res) => {
				console.log(res.data);
				const author = res.data;
				this.setState({ author });
			});
	}

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
										<h2>Practice</h2>
									</div>
									<div className="ui card w-100">
										<div className="content">
											<div className="header">{this.state.data.title}</div>
											<div className="meta">2 days ago</div>
											<div className="description">
												<p>{this.state.data.body}</p>
											</div>
										</div>
										<div className="extra content">
											<i className="check icon"></i>
											Contributed by &nbsp;
											{this.state.author.first_name +
												" " +
												this.state.author.last_name}
										</div>
									</div>
								</div>
							</div>
							<div className="four wide column mt-5">
								{/* <AdOne /> */}
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

export default connect(mapStateToProps)(SinglePractice)