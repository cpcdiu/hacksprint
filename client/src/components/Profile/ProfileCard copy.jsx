import React, { Component } from "react";
import { Button, Dimmer } from "semantic-ui-react";

export default class ProfileCard extends Component {
	state = {
		editMode: false,
		active: false,
		user: this.props.user,
		info: this.props.info,
		hola: "",
	};

	static getDerivedStateFromProps(nextProps, prevState) {
		return {
			user: nextProps.user,
			info: nextProps.info,
		};
	}

	fileInputRef = React.createRef();

	handleEditProfile = () => {
		console.log(this.state);
		this.setState(() => {
			return {
				active: !this.state.active,
				editMode: !this.state.editMode,
			};
		});
	};

	updateInfo = (data) => {
		const newObj = { ...this.state.info, ...data };

		this.setState({ info: newObj });

		// console.log(newObj);

		// this.setState((prevState) => ({
		// 	// info: {
		// 	// 	...prevState.info,
		// 	// 	...data,
		// 	// },
		// 	hola: "wow...",
		// }));

		// this.setState((prevState) => {
		// 	let info = Object.assign({}, prevState.info);
		// 	info.contact = newObj.contact;
		// 	info.website = newObj.website;
		// 	info.location = "France";

		// 	return { info: {} };
		// });

		// this.setState({ info: [...this.state.info, ...newObj] });

		// this.setState({ info: {} });
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
						<div className="header">
							{this.state.user.first_name + " " + this.state.user.last_name}
						</div>
						<div className="meta">
							<p className="mb-2">{this.state.info.works_at}</p>
							{this.state.info.location ? (
								<Info
									icon="map marker alternate"
									data={this.state.info.location}
									editMode={this.state.editMode}
									updateInfo={this.updateInfo}
									name="location"
								/>
							) : (
								""
							)}
							{this.state.info.contact ? (
								<Info
									icon="envelope outline"
									data={this.state.info.contact}
									editMode={this.state.editMode}
									updateInfo={this.updateInfo}
									name="contact"
								/>
							) : (
								""
							)}
							{this.state.info.website ? (
								<Info
									icon="linkify"
									data={this.state.info.website}
									editMode={this.state.editMode}
									updateInfo={this.updateInfo}
									name="website"
								/>
							) : (
								""
							)}
						</div>
					</div>
				</div>
				{this.state.editMode ? (
					<button
						className="fluid ui positive button"
						onClick={this.handleEditProfile}
					>
						<i className="save icon mr-2"></i> Save
					</button>
				) : (
					<button className="fluid ui button" onClick={this.handleEditProfile}>
						<i className="edit outline icon mr-2"></i> Edit Profile
					</button>
				)}
			</div>
		);
	}
}

class Info extends Component {
	state = {
		data: this.props.data,
	};

	handleChange = (e) => {
		this.setState({
			data: e.target.value,
		});
		this.props.updateInfo({ [this.props.name]: e.target.value });
	};

	render() {
		return (
			<div className="d-flex mt-1">
				<i className={this.props.icon + " icon"}></i>

				{this.props.editMode ? (
					<div className="ui mini input">
						<input
							type="text"
							value={this.state.data}
							onChange={this.handleChange}
						/>
					</div>
				) : (
					<p className="pl-1">
						<a href="/">{this.props.data}</a>
					</p>
				)}
			</div>
		);
	}
}
