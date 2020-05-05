import React, { Component } from "react";
import {
	Button,
	Form,
	Grid,
	Header,
	Image,
	Message,
	Segment,
} from "semantic-ui-react";
import { connect } from "react-redux";
import classNames from "classnames";
import { Link, Redirect } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import logo from "../assets/img/logo.png";

class RegistrationForm extends Component {
	state = {
		isHidden: false,
	};

	messageClass = classNames({
		ui: true,
		success: true,
		message: true,
		transition: true,
	});

	handleClose = () => {
		this.setState((prevState) => ({ isHidden: !prevState.isHidden }));
		console.log(this.state.isHidden);
	};

	render() {
		return (
			<div>
				<Navbar />
				<Grid
					textAlign="center"
					style={{ height: "100vh" }}
					verticalAlign="middle"
				>
					<Grid.Column style={{ maxWidth: 450 }}>
						<Header as="h2" color="teal" textAlign="center">
							<Image src={logo} /> Sign Up for beta testing
						</Header>
						<div
							className={
								"ui blue message transition " +
								(this.state.isHidden ? "hidden" : "sh")
							}
						>
							<i class="close icon" onClick={this.handleClose}></i>
							<div class="header">User registration is temporarily closed.</div>
							<p>
								If you're interested in beta testing. Please mail at
								dev.diucpc@gmail.com from your DIU mail
							</p>
						</div>
						<Form size="large">
							<Segment stacked>
								<div className="two fields">
									<Form.Input fluid placeholder="First Name" />
									<Form.Input fluid placeholder="Last Name" />
								</div>
								<div className="field">
									<Form.Input
										fluid
										placeholder="Username"
										icon="at"
										iconPosition="left"
									/>
								</div>
								<div className="field">
									<div className="ui left icon right labeled input">
										<i className="envelope icon"></i>
										<input
											type="text"
											name="email"
											placeholder="example15-0000"
										/>
										<div className="ui basic label">@diu.edu.bd</div>
									</div>
								</div>
								<div className="field">
									<div className="ui left icon input">
										<i className="lock icon"></i>
										<input
											type="password"
											placeholder="Password"
											name="password"
										/>
									</div>
								</div>

								<Button color="teal" fluid size="large">
									Sign Up
								</Button>
							</Segment>
						</Form>
						<Message>
							Already have an account? <Link to="/login">Login</Link>
						</Message>
					</Grid.Column>
				</Grid>
			</div>
		);
	}
}

class SignUpPage extends Component {
	render() {
		const { authReducer } = this.props;

		return (
			<div>
				{authReducer.isLoading ? (
					<div></div>
				) : authReducer.isAuthenticated ? (
					<Redirect to="/dashboard" />
				) : (
					<RegistrationForm />
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		authReducer: state.authReducer,
	};
};

export default connect(mapStateToProps)(SignUpPage);
