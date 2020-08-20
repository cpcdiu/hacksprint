import React, { Component } from "react";
import axios from "axios";
import SingleTrack from "./SingleTrack";
import { nanoid } from "nanoid";

export default class Tracks extends Component {
	state = {
		tracks: [],
	};

	componentDidMount() {
		axios
			.get(`${process.env.REACT_APP_WEBSITE_NAME}/api/tracks/`, {
				headers: {
					Authorization: `Token ${this.props.token}`,
				},
			})
			.then((res) => {
				const tracks = res.data;
				this.setState({ tracks });
			});
	}

	render() {
		return (
			<div className="ui three cards mt-1">
				{this.state.tracks.map((track) => (
					<SingleTrack key={nanoid()} track={track} />
				))}
			</div>
		);
	}
}
