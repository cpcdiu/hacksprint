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
			.get("http://localhost:8000/api/tracks/", {
				headers: {
					Authorization: "Token 14c791bb695d794042f05be9044bd964821de246",
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
