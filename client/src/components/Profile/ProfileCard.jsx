import React, { Component } from "react";
import { Button, Dimmer } from "semantic-ui-react";

export default class ProfileCard extends Component {
	state = {
		editMode: false,
		active: false,
		user: this.props.user,
		info: this.props.info,
		location: "",
		contact: "",
		website: "",
	};

	static getDerivedStateFromProps(nextProps, prevState) {
		return {
			user: nextProps.user,
			info: nextProps.info,
			location: nextProps.info.location,
			contact: nextProps.info.contact,
			website: nextProps.info.website,
		};
	}

	fileInputRef = React.createRef();

	handleEditClick = () => {
		this.setState({
			editMode: !this.state.editMode,
			active: !this.state.active,
		});
	};

	handleInputChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	regularCardContent = () => {
		const { user, info } = this.state;

		return (
			<>
				<div className="header">{user.first_name + " " + user.last_name}</div>
				<div className="meta">
					<p className="mb-2">@{this.state.user.username}</p>
					<div className="d-flex mt-1">
						<i className="map marker alternate icon"></i>
						<p className="pl-1">{info.location}</p>
					</div>
					<div className="d-flex mt-1">
						<i className="envelope outline icon"></i>
						<p className="pl-1">{info.contact}</p>
					</div>
					<div className="d-flex mt-1">
						<i className="linkify icon"></i>
						<p className="pl-1">
							<a href="/">{info.website}</a>
						</p>
					</div>
				</div>
			</>
		);
	};

	editCardContent = () => {
		return (
			<>
				<div className="header">
					{this.state.user.first_name + " " + this.state.user.last_name}
				</div>
				<div className="meta">
					<p className="mb-2">@{this.state.user.username}</p>
					<div className="d-flex align-items-center mt-1">
						<div>
							<i className="map marker alternate icon"></i>
						</div>
						<div class="ui mini icon input">
							<input type="text" name="location" value={this.state.location} />
						</div>
					</div>
					<div className="d-flex align-items-center mt-1">
						<div>
							<i className="envelope outline icon"></i>
						</div>
						<div class="ui mini icon input">
							<input type="text" name="contact" value={this.state.contact} />
						</div>
					</div>
					<div className="d-flex align-items-center mt-1">
						<div>
							<i className="linkify icon"></i>
						</div>
						<div class="ui mini icon input">
							<input type="text" name="website" value={this.state.website} />
						</div>
					</div>
				</div>
			</>
		);
	};

	render() {
		return (
			<div>
				<div className="ui fluid card">
					<Dimmer.Dimmable
						blurring
						dimmed={this.state.active}
						style={{ height: "100%" }}
					>
						<Dimmer
							active={this.state.active}
							onClickOutside={this.state.handleEditProfile}
						>
							<Button
								inverted
								content="Choose File"
								onClick={() => this.fileInputRef.current.click()}
							/>
							<input
								ref={this.fileInputRef}
								type="file"
								hidden
								onChange={this.fileChange}
							/>
						</Dimmer>
						<img
							src="https://semantic-ui.com/images/avatar/large/steve.jpg"
							alt="dummy"
							style={{ width: "100%", height: "auto" }}
						/>
					</Dimmer.Dimmable>

					<div className="content border-0">
						{this.state.editMode
							? this.editCardContent()
							: this.regularCardContent()}
					</div>
				</div>
				{this.state.editMode ? (
					<>
						<button
							className="fluid ui positive button"
							onClick={this.handleEditClick}
						>
							<i className="save icon mr-2"></i>Save
						</button>
						<button
							className="fluid ui button mt-2"
							onClick={this.handleEditClick}
						>
							{/* <i className="window close icon mr-2"></i> */}
							Cancel
						</button>
					</>
				) : (
					<button className="fluid ui button" onClick={this.handleEditClick}>
						<i className="edit outline icon mr-2"></i> Edit Profile
					</button>
				)}
			</div>
		);
	}
}

export class Regular extends Component {
	render() {
		const { user, info } = this.props;

		return (
			<div className="ui fluid card">
				<a className="image" href="/">
					<img
						src="https://semantic-ui.com/images/avatar/large/steve.jpg"
						alt="dummy"
					/>
				</a>
				<div className="content">
					<div className="header">{user.first_name + " " + user.last_name}</div>
					<div className="meta">
						<p className="mb-2">@shakilahmmeed</p>
						<div className="d-flex mt-1">
							<i className="map marker alternate icon"></i>
							<p className="pl-1">{info.location}</p>
						</div>
						<div className="d-flex mt-1">
							<i className="envelope outline icon"></i>
							<p className="pl-1">{info.contact}</p>
						</div>
						<div className="d-flex mt-1">
							<i className="linkify icon"></i>
							<p className="pl-1">
								<a href="/">{info.website}</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export class Edit extends Component {
	state = {
		editMode: false,
		active: false,
		user: this.props.user,
		info: this.props.info,
		hola: "",
	};

	render() {
		return (
			<div className="ui fluid card">
				<Dimmer.Dimmable
					blurring
					dimmed={this.state.active}
					style={{ height: "100%" }}
				>
					<Dimmer
						active={this.state.active}
						onClickOutside={this.state.handleEditProfile}
					>
						<Button
							inverted
							content="Choose File"
							onClick={() => this.fileInputRef.current.click()}
						/>
						<input
							ref={this.fileInputRef}
							type="file"
							hidden
							onChange={this.fileChange}
						/>
					</Dimmer>
					<img
						src="https://semantic-ui.com/images/avatar/large/steve.jpg"
						alt="dummy"
						style={{ width: "100%", height: "auto" }}
					/>
				</Dimmer.Dimmable>
				<div className="content">
					<div className="header">Editing</div>
					<div className="meta">
						<p className="mb-2">@shakilahmmeed</p>
						<div className="d-flex mt-1">
							<i className="map marker alternate icon"></i>
							<p className="pl-1">Bangladesh</p>
						</div>
						<div className="d-flex mt-1">
							<i className="envelope outline icon"></i>
							<p className="pl-1">mail@shakilahmed.com</p>
						</div>
						<div className="d-flex mt-1">
							<i className="linkify icon"></i>
							<p className="pl-1">
								<a href="/">www.shakilahmed.com</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
