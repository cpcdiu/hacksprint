import React from "react";
import { Form } from "semantic-ui-react";
import {
	DateInput,
	TimeInput,
	DateTimeInput,
	DatesRangeInput,
} from "semantic-ui-calendar-react";

export default class DateTimeForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			date: "",
			time: "",
			dateTime: "",
			datesRange: "",
		};
	}

	handleChange = (event, { name, value }) => {
		if (this.state.hasOwnProperty(name)) {
			this.setState({ [name]: value });
		}
	};

	render() {
		return (
			<Form>
				<DateInput
					name="date"
					placeholder="Date"
					value={this.state.date}
					iconPosition="left"
					onChange={this.handleChange}
				/>
				<TimeInput
					name="time"
					placeholder="Time"
					value={this.state.time}
					iconPosition="left"
					onChange={this.handleChange}
				/>
				<DateTimeInput
					name="dateTime"
					placeholder="Date Time"
					value={this.state.dateTime}
					iconPosition="left"
					onChange={this.handleChange}
				/>
				<DatesRangeInput
					name="datesRange"
					placeholder="From - To"
					value={this.state.datesRange}
					iconPosition="left"
					onChange={this.handleChange}
				/>
			</Form>
		);
	}
}
