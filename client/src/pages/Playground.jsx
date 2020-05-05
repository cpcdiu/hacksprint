import React, { Component } from "react";

export default class Playground extends Component {
	state = {
		count: 0,
	};

	handleIncrement = () => {
		this.setState(() => {
			return {
				count: this.state.count + 1,
			};
		});
	};

	render() {
		return (
			<div>
				<Bar count={this.state.count} />
				<div>Count is {this.state.count}</div>
				<button onClick={this.handleIncrement}>+</button>
			</div>
		);
	}
}

class Bar extends Component {
	state = {
		count: this.props.count,
	};

	static getDerivedStateFromProps(nextProps, prevState) {
		return {
			count: nextProps.count,
		};
	}

	render() {
		return <div>Count is {this.state.count}</div>;
	}
}
