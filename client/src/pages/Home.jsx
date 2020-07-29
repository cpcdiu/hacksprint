import PropTypes from "prop-types";
import React, { Component } from "react";
import {
	Button,
	Container,
	Grid,
	Header,
	Icon,
	Image,
	List,
	Menu,
	Responsive,
	Segment,
	Sidebar,
	Visibility,
} from "semantic-ui-react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import dummy from "../assets/img/grou.jpg";
import bg from "../assets/img/bg-2.jpg";

const getWidth = () => {
	const isSSR = typeof window === "undefined";

	return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

const HomepageHeading = ({ mobile }) => (
	<Container text>
		<Header
			as="h1"
			content="Developers Playground"
			inverted
			style={{
				fontSize: mobile ? "2em" : "4em",
				fontWeight: "normal",
				marginBottom: 0,
				marginTop: mobile ? "1.5em" : "3em",
			}}
		/>
		<Header
			as="h2"
			content="Where developers play with code"
			inverted
			style={{
				fontSize: mobile ? "1.5em" : "1.7em",
				fontWeight: "normal",
				marginTop: mobile ? "0.5em" : "15px",
			}}
		/>
		<Button as={Link} to="/login" primary size="huge">
			Get Started
			<Icon name="right arrow" />
		</Button>
	</Container>
);

HomepageHeading.propTypes = {
	mobile: PropTypes.bool,
};

class DesktopContainer extends Component {
	state = {};

	hideFixedMenu = () => this.setState({ fixed: false });
	showFixedMenu = () => this.setState({ fixed: true });

	render() {
		const { children } = this.props;
		const { fixed } = this.state;

		return (
			<Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
				<Visibility
					once={false}
					onBottomPassed={this.showFixedMenu}
					onBottomPassedReverse={this.hideFixedMenu}
				>
					<Segment
						inverted
						textAlign="center"
						className="hero"
						style={{
							padding: "0px",
							backgroundImage: `url(${bg})`,
							backgroundRepeat: "no-repeat",
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}
						vertical
					>
						<div
							style={{
								background: "rgba(0, 0, 0, 0.5)",
								height: "100%",
								padding: "14px 0px",
							}}
						>
							<Menu
								fixed={fixed ? "top" : null}
								inverted={!fixed}
								pointing={!fixed}
								secondary={!fixed}
								size="large"
								style={{ border: "none" }}
							>
								<Container>
									<Menu.Item as={Link} className="logo-landing">
										Hacksprint
									</Menu.Item>
									<Menu.Item position="right">
										<Button as={Link} inverted={!fixed} to="/login">
											Log in
										</Button>
										<Button
											as={Link}
											inverted={!fixed}
											primary={fixed}
											style={{ marginLeft: "0.5em" }}
											to="/register"
										>
											Sign Up
										</Button>
									</Menu.Item>
								</Container>
							</Menu>
							<HomepageHeading />
						</div>
					</Segment>
				</Visibility>

				{children}
			</Responsive>
		);
	}
}

DesktopContainer.propTypes = {
	children: PropTypes.node,
};

class MobileContainer extends Component {
	state = {};

	handleSidebarHide = () => this.setState({ sidebarOpened: false });

	handleToggle = () => this.setState({ sidebarOpened: true });

	render() {
		const { children } = this.props;
		const { sidebarOpened } = this.state;

		return (
			<Responsive
				as={Sidebar.Pushable}
				getWidth={getWidth}
				maxWidth={Responsive.onlyMobile.maxWidth}
			>
				<Sidebar
					as={Menu}
					animation="push"
					inverted
					onHide={this.handleSidebarHide}
					vertical
					visible={sidebarOpened}
				>
					<Menu.Item as="a" active>
						Home
					</Menu.Item>
					<Menu.Item as="a">Log in</Menu.Item>
					<Menu.Item as="a">Sign Up</Menu.Item>
				</Sidebar>

				<Sidebar.Pusher dimmed={sidebarOpened}>
					<Segment
						inverted
						textAlign="center"
						style={{ minHeight: 350, padding: "1em 0em" }}
						vertical
					>
						<Container>
							<Menu inverted pointing secondary size="large">
								<Menu.Item onClick={this.handleToggle}>
									<Icon name="sidebar" />
								</Menu.Item>
								<Menu.Item position="right">
									<Button as="a" inverted>
										Log in
									</Button>
									<Button as="a" inverted style={{ marginLeft: "0.5em" }}>
										Sign Up
									</Button>
								</Menu.Item>
							</Menu>
						</Container>
						<HomepageHeading mobile />
					</Segment>

					{children}
				</Sidebar.Pusher>
			</Responsive>
		);
	}
}

MobileContainer.propTypes = {
	children: PropTypes.node,
};

const ResponsiveContainer = ({ children }) => (
	<div>
		<DesktopContainer>{children}</DesktopContainer>
		<MobileContainer>{children}</MobileContainer>
	</div>
);

ResponsiveContainer.propTypes = {
	children: PropTypes.node,
};

const HomepageLayout = () => (
	<ResponsiveContainer>
		<Segment style={{ padding: "8em 0em" }} vertical>
			<Grid container stackable verticalAlign="middle">
				<Grid.Row>
					<Grid.Column width={8}>
						<Header as="h3" style={{ fontSize: "2em" }}>
							Join Hackathon
						</Header>
						<p style={{ fontSize: "1.33em" }}>
							Popular companies from the industry regularly hosts hackathon on
							Hacksprint. Join hackathon to sharpen your development skill
						</p>
						<Header as="h3" style={{ fontSize: "2em" }}>
							Practice on Track
						</Header>
						<p style={{ fontSize: "1.33em" }}>
							Select your career track and practice the tasks related to that
							career path
						</p>
					</Grid.Column>
					<Grid.Column floated="right" width={6}>
						<Image bordered rounded size="large" src={dummy} />
					</Grid.Column>
				</Grid.Row>
				<Grid.Row>
					<Grid.Column textAlign="center">
						<Button as={Link} to="/login" size="huge">
							Start Now
						</Button>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Segment>

		{/* <Segment style={{ padding: "0em" }} vertical>
			<Grid celled="internally" columns="equal" stackable>
				<Grid.Row textAlign="center">
					<Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
						<Header as="h3" style={{ fontSize: "2em" }}>
							"What a Company"
						</Header>
						<p style={{ fontSize: "1.33em" }}>
							That is what they all say about us
						</p>
					</Grid.Column>
					<Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
						<Header as="h3" style={{ fontSize: "2em" }}>
							"I shouldn't have gone with their competitor."
						</Header>
						<p style={{ fontSize: "1.33em" }}>
							<Image avatar src={dummy2} />
							<b>Nan</b> Chief Fun Officer Acme Toys
						</p>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Segment>

		<Segment style={{ padding: "8em 0em" }} vertical>
			<Container text>
				<Header as="h3" style={{ fontSize: "2em" }}>
					Breaking The Grid, Grabs Your Attention
				</Header>
				<p style={{ fontSize: "1.33em" }}>
					Instead of focusing on content creation and hard work, we have learned
					how to master the art of doing nothing by providing massive amounts of
					whitespace and generic content that can seem massive, monolithic and
					worth your attention.
				</p>
				<Button as="a" size="large">
					Read More
				</Button>

				<Divider
					as="h4"
					className="header"
					horizontal
					style={{ margin: "3em 0em", textTransform: "uppercase" }}
				>
					<a href="/">Case Studies</a>
				</Divider>

				<Header as="h3" style={{ fontSize: "2em" }}>
					Did We Tell You About Our Bananas?
				</Header>
				<p style={{ fontSize: "1.33em" }}>
					Yes I know you probably disregarded the earlier boasts as non-sequitur
					filler content, but it's really true. It took years of gene splicing
					and combinatory DNA research, but our bananas can really dance.
				</p>
				<Button as="a" size="large">
					I'm Still Quite Interested
				</Button>
			</Container>
		</Segment> */}

		<Segment inverted vertical style={{ padding: "5em 0em" }}>
			<Container>
				<Grid divided inverted stackable>
					<Grid.Row>
						<Grid.Column width={3}>
							<Header inverted as="h4" content="Navigation" />
							<List link inverted>
								<List.Item as="a">About</List.Item>
								<List.Item as="a">Contact Us</List.Item>
								<List.Item as="a">Code of Conduct</List.Item>
								<List.Item as="a">Career</List.Item>
							</List>
						</Grid.Column>
						<Grid.Column width={3}>
							<Header inverted as="h4" content="Resources" />
							<List link inverted>
								<List.Item as="a">Contributing</List.Item>
								<List.Item as="a">Privacy</List.Item>
								<List.Item as="a">Terms</List.Item>
								<List.Item as="a">Help</List.Item>
							</List>
						</Grid.Column>
						<Grid.Column width={7}>
							{/* <Header as="h4" inverted>
								About
							</Header> */}
							<p>
								An Open Source initiative by Daffodil International University
								Computer Programming Club
							</p>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
		</Segment>
	</ResponsiveContainer>
);

class Homepage extends Component {
	render() {
		const { authReducer } = this.props;

		return (
			<div>
				{authReducer.isLoading ? (
					<p></p>
				) : authReducer.isAuthenticated ? (
					<Redirect to="/dashboard" />
				) : (
					<HomepageLayout />
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

export default connect(mapStateToProps)(Homepage);
