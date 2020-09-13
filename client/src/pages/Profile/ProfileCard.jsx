import React, { Component } from "react";
import { Button, Dimmer } from "semantic-ui-react";

export default class ProfileCard extends Component {
	state = {
		editMode: false,
		active: false,
		user: this.props.user,
		username: this.props.username,
		info: this.props.info,
		image: null,
		location: "",
		contact: "",
		website: "",
	};

	static getDerivedStateFromProps(nextProps, prevState) {
		return {
			user: nextProps.user,
			info: nextProps.info,
			username: nextProps.username,
		};
	}

	fileInputRef = React.createRef();

	handleEditClick = () => {
		this.setState({
			editMode: !this.state.editMode,
			active: !this.state.active,
			location: this.state.info.location,
			contact: this.state.info.contact,
			website: this.state.info.website,
		});
	};

	handleSaveClick = () => {
		this.props.handleProfileData({
			location: this.state.location,
			contact: this.state.contact,
			website: this.state.website,
			image: this.state.image
		});

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


  handleImageChange = (e) => {
    this.setState({
      image: e.target.files[0]
    })
	};
	

	regularCardContent = () => {
		const { user, info } = this.state;

		return (
			<>
				<div className="header">{user.first_name + " " + user.last_name}</div>
				<div className="meta">
					<p className="mb-2">@{this.state.username}</p>
					{info.location ? (
						<div className="d-flex mt-1">
							<i className="map marker alternate icon"></i>
							<p className="pl-1">{info.location}</p>
						</div>
					) : (
						""
					)}
					{info.contact ? (
						<div className="d-flex mt-1">
							<i className="envelope outline icon"></i>
							<p className="pl-1">{info.contact}</p>
						</div>
					) : (
						""
					)}
					{info.website ? (
						<div className="d-flex mt-1">
							<i className="linkify icon"></i>
							<p className="pl-1">
								<a href="/">{info.website}</a>
							</p>
						</div>
					) : (
						""
					)}
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
					<p className="mb-2">@{this.state.username}</p>
					<div className="d-flex align-items-center mt-1">
						<div>
							<i className="map marker alternate icon"></i>
						</div>
						<div className="ui mini icon input">
							<input
								type="text"
								name="location"
								value={this.state.location}
								onChange={this.handleInputChange}
							/>
						</div>
					</div>
					<div className="d-flex align-items-center mt-1">
						<div>
							<i className="envelope outline icon"></i>
						</div>
						<div className="ui mini icon input">
							<input
								type="text"
								name="contact"
								value={this.state.contact}
								onChange={this.handleInputChange}
							/>
						</div>
					</div>
					<div className="d-flex align-items-center mt-1">
						<div>
							<i className="linkify icon"></i>
						</div>
						<div className="ui mini icon input">
							<input
								type="text"
								name="website"
								value={this.state.website}
								onChange={this.handleInputChange}
							/>
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
								onChange={this.handleImageChange}
							/>
						</Dimmer>
						<img
							src={process.env.REACT_APP_WEBSITE_NAME+this.state.info.profilePicture}
							alt={this.state.username}
							style={{display: "block", height: "250px", width:"100%", objectFit: "cover"}}
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
							onClick={this.handleSaveClick}
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
