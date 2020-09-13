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
import { handleRegister } from "../actions/authAction";
import logo from "../assets/img/logo.png";

class RegistrationForm extends Component {
	state = {
		isHidden: false,
		first_name: "",
		last_name: "",
		username: "",
		email: "",
		password: "",
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

	handleFormInput = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleFormSubmit = (e) => {
		let newUser = {
			first_name: this.state.first_name,
			last_name: this.state.last_name,
			username: this.state.username,
			email: this.state.email,
			password: this.state.password,
		};

		this.props.handleRegister(newUser);

		this.setState({
			first_name: "",
			last_name: "",
			username: "",
			email: "",
			password: "",
		});
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
							<i className="close icon" onClick={this.handleClose}></i>
							<div className="header">DIU Email Only</div>
							<p>
								This beta testing is only for DIU student. Please sign up with
								your DIU email to get approval of your account.
							</p>
						</div>
						<Form
							size="large"
							onSubmit={this.handleFormSubmit}
							{...(this.props.authReducer.signupMsg === "success"
								? { success: true }
								: this.props.authReducer.signupMsg === "error"
								? { error: true }
								: "")}
						>
							<Segment stacked>
								<div className="two fields">
									<Form.Input
										name="first_name"
										value={this.state.first_name}
										fluid
										placeholder="First Name"
										onChange={this.handleFormInput}
									/>
									<Form.Input
										name="last_name"
										value={this.state.last_name}
										fluid
										placeholder="Last Name"
										onChange={this.handleFormInput}
									/>
								</div>
								<div className="field">
									<Form.Input
										name="username"
										value={this.state.username}
										fluid
										placeholder="Username"
										icon="at"
										iconPosition="left"
										onChange={this.handleFormInput}
									/>
								</div>
								<div className="field">
									<div className="ui left icon right labeled input">
										<i className="envelope icon"></i>
										<input
											type="text"
											name="email"
											value={this.state.email}
											placeholder="example15-0000@diu.edu.bd"
											onChange={this.handleFormInput}
										/>
									</div>
								</div>
								<div className="field">
									<div className="ui left icon input">
										<i className="lock icon"></i>
										<input
											type="password"
											value={this.state.password}
											placeholder="Password"
											name="password"
											onChange={this.handleFormInput}
										/>
									</div>
								</div>

								<div class="ui error message">
									<div class="content">
										<div class="header">Action Forbidden</div>
										<p>Something went wrong!</p>
									</div>
								</div>

								<div class="ui success message">
									<div class="content">
										<div class="header">Thanks for signing up</div>
										<p>
											Once admin approve your beta access. You'll get email
											verification mail
										</p>
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
					<RegistrationForm
						handleRegister={this.props.handleRegister}
						authReducer={authReducer}
					/>
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

export default connect(mapStateToProps, { handleRegister })(SignUpPage);
