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
import { Link, Redirect } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { handleLogin } from "../actions/authAction";
import logo from "../assets/img/logo.png";

class LoginPage extends Component {
	render() {
		const { authReducer, handleLogin } = this.props;

		return (
			<div>
				{authReducer.isLoading ? (
					<div></div>
				) : authReducer.isAuthenticated ? (
					<Redirect to="/dashboard" />
				) : (
					<Login handleLogin={handleLogin} />
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

export default connect(mapStateToProps, { handleLogin })(LoginPage);

class Login extends Component {
	state = {
		username: "",
		password: "",
	};

	handleFormInput = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleFormSubmit = (e) => {
		e.preventDefault();
		this.props.handleLogin(this.state);
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
							<Image src={logo} /> Log-in to your account
						</Header>
						<Form size="large" onSubmit={this.handleFormSubmit}>
							<Segment stacked>
								<Form.Input
									fluid
									icon="user"
									iconPosition="left"
									placeholder="Username"
									onChange={this.handleFormInput}
									name="username"
								/>
								<Form.Input
									fluid
									icon="lock"
									iconPosition="left"
									placeholder="Password"
									type="password"
									name="password"
									onChange={this.handleFormInput}
								/>

								<Button type="submit" color="teal" fluid size="large">
									Login
								</Button>
							</Segment>
						</Form>
						<Message>
							New to us? <Link to="/register">Sign Up</Link>
						</Message>
					</Grid.Column>
				</Grid>
			</div>
		);
	}
}
