import React, { Component } from "react";
import { Link, useRouteMatch } from "react-router-dom";

export default function SingleTrack(props) {
	let { path, url } = useRouteMatch();

	return (
		<div className="card">
			<Link
				to={url + "/" + props.track.id}
				className="content"
				style={{ color: "inherit" }}
			>
				<div className="ui two column grid">
					<div className="six wide column pr-0">
						<img
							src={props.track.avatar}
							className="img-fluid"
							style={{ width: "100%", height: "auto" }}
							alt="dummy"
						/>
					</div>
					<div className="ten wide column">
						<h4 className="mb-2">{props.track.title}</h4>
						<div className="description">{props.track.desc}</div>
					</div>
				</div>
			</Link>
		</div>
	);
}
