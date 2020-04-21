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
import { Link, Redirect } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import logo from "../assets/img/logo.png";
import axios from "axios";

export default class LoginPage extends Component {
	state = {
		isAuthenticated: false,
	};

	componentDidMount() {
		if (localStorage.getItem("token")) {
			this.setState({ isAuthenticated: true });
		} else {
			this.setState({ isAuthenticated: false });
		}
	}

	updateAuth = (isAuthenticated) => {
		this.setState({ isAuthenticated });
	};

	render() {
		return (
			<div>
				{this.state.isAuthenticated ? (
					<Redirect to="/dashboard" />
				) : (
					<Login checkAuth={this.updateAuth} />
				)}
			</div>
		);
	}
}

export class Logout extends Component {
	componentDidMount() {
		localStorage.removeItem("token");
	}

	render() {
		return <Redirect to="/" />;
	}
}

class Login extends Component {
	state = {
		username: "",
		password: "",
		isAuthenticated: false,
	};

	handleFormInput = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleFormSubmit = (e) => {
		e.preventDefault();
		var body = {
			username: this.state.username,
			password: this.state.password,
		};
		axios
			.post("http://localhost:8000/login/", body)
			.then((res) => {
				var token = res.data.token;
				localStorage.setItem("token", token);
				this.setState({ isAuthenticated: true });
			})
			.catch((err) => {
				console.log(err);
			})
			.then(() => {
				this.props.checkAuth(this.state.isAuthenticated);
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
