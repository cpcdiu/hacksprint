import React from "react";
import {
	Button,
	Form,
	Grid,
	Header,
	Image,
	Message,
	Segment,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import logo from "../assets/img/logo.png";

const RegistrationForm = () => (
	<>
		<Navbar />
		<Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
			<Grid.Column style={{ maxWidth: 450 }}>
				<Header as="h2" color="teal" textAlign="center">
					<Image src={logo} /> Sign Up for beta testing
				</Header>
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
						<div class="field">
							<div class="ui left icon right labeled input">
								<i class="envelope icon"></i>
								<input type="text" name="email" placeholder="example15-0000" />
								<div class="ui basic label">@diu.edu.bd</div>
							</div>
						</div>
						<div class="field">
							<div class="ui left icon input">
								<i class="lock icon"></i>
								<input type="password" placeholder="Password" name="password" />
							</div>
						</div>

						<Button color="teal" fluid size="large">
							Login
						</Button>
					</Segment>
				</Form>
				<Message>
					Already have an account? <Link to="/login">Login</Link>
				</Message>
			</Grid.Column>
		</Grid>
	</>
);

export default RegistrationForm;
