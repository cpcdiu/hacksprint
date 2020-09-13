import React from "react";

const subdomains = [
	{
		id: 1,
		name: "Web",
		slug: "web",
		domain: 1,
	},
	{
		id: 2,
		name: "Android",
		slug: "android",
		domain: 1,
	},
	{
		id: 30,
		name: "UI/UX",
		slug: "ui-ux",
		domain: 1,
	},
];

class MultiCheckBox extends React.Component {
	state = {
		hobbies: [],
	};

	handleInputChange = (event) => {
		const target = event.target;
		var value = target.value;

		if (target.checked) {
			this.setState({ hobbies: [...this.state.hobbies, value] }, function () {
				console.log(this.state.hobbies);
			});
		} else {
			this.setState(
				{
					hobbies: this.state.hobbies.filter((item) => item !== value),
				},
				function () {
					console.log(this.state.hobbies);
				}
			);
		}
	};

	handleSubmit = () => {
		console.log(this.state);
	};

	render() {
		return (
			<div>
				<div>
					<div>
						<h3>React Multiple Checkbox</h3>

						<div>
							<div>
								<label>Hobbies :</label>
							</div>
							{subdomains.map((subdomain) => (
								<Checkbox
									label={subdomain.name}
									id={subdomain.id}
									onChange={this.handleInputChange}
									key={subdomain.id}
								/>
							))}
						</div>

						<button type="submit" onClick={this.handleSubmit}>
							Submit
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default MultiCheckBox;

function Checkbox({ label, onChange, id }) {
	return (
		<div>
			<input
				type="checkbox"
				name="hobbies"
				id={"check" + id}
				value={id}
				onChange={onChange}
			/>
			<label htmlFor={"check" + id}>{label}</label>
		</div>
	);
}
