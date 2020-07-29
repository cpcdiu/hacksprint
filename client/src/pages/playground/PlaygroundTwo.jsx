import React from "react";

const listwebsitesData = [
	{ id: 1, name: "name-1", url: "Url-1" },
	{ id: 2, name: "name-2", url: "Url-2" },
	{ id: 3, name: "name-3", url: "Url-3" },
];

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedId: null,
		};
		this.handleChangess = this.handleChangess.bind(this);
	}

	handleChangess(id, value) {
		this.setState({ selectedId: value === true ? id : null });
	}

	render() {
		return (
			<div className="App">
				<h1>Hello CodeSandbox</h1>
				<h2>Start editing to see some magic happen!</h2>
				{listwebsitesData.map((data) => {
					return (
						<Tablerow
							selectedId={this.state.selectedId}
							listwebsites={data}
							handleChangess={this.handleChangess}
						/>
					);
				})}
			</div>
		);
	}
}

class Tablerow extends React.Component {
	constructor(props) {
		super(props);
		let { listwebsites } = this.props;
		listwebsites.checked = false;
		this.state = {
			fields: {
				id: listwebsites.id,
			},
		};

		this.click = this.click.bind(this);
		this.selectOnlyThis = this.selectOnlyThis.bind(this);
	}
	click(value) {
		this.props.handleChangess(this.state.fields.id, value);
	}

	selectOnlyThis() {}

	render() {
		const { listwebsites, selectedId } = this.props;
		return (
			<tr>
				<td>
					<input
						disabled={selectedId && selectedId !== listwebsites.id}
						id={`checkbox_${listwebsites.id}`}
						value={listwebsites.checked}
						onChange={(e) => this.click(e.target.checked)}
						type="checkbox"
						name="record"
					/>
				</td>
				<td>{listwebsites.name}</td>
				<td>{listwebsites.url}</td>
			</tr>
		);
	}
}
