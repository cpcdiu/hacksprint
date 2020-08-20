import React, { Component, Fragment } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default class Tabe extends Component {
	render() {
		return (
			<Fragment>
				<Tabs>
					<TabList className="mb-3 tab-bar">
						<div className="d-flex">
							<Tab className="tab">Details</Tab>
							<Tab className="tab">Leaderboard</Tab>
							<Tab className="tab">Team</Tab>
							<div className="ml-auto join-button">Join Challenge</div>
						</div>
					</TabList>
					<TabPanel>
						<DetailTab body={this.props.content.body} />
					</TabPanel>
					<TabPanel>
						<Leaderboard />
					</TabPanel>
					<TabPanel>
						<Team />
					</TabPanel>
				</Tabs>
				<style jsx>{`
					.tab {
						padding: 10px;
					}
				`}</style>
			</Fragment>
		);
	}
}

function DetailTab(props) {
	return (
		<div className="ui grid">
			<div className="eleven wide column">
				<div className="ui card w-100">
					<div className="content">
						<div
							dangerouslySetInnerHTML={{
								__html: props.body,
							}}
						></div>
					</div>
				</div>
			</div>
			<div className="five wide column pl-0">
				<div className="ui card w-100">
					<div className="content">
						<h4>sidebar here</h4>
					</div>
				</div>
			</div>
		</div>
	);
}

function Leaderboard(props) {
	return (
		<table class="ui single line table">
			<thead>
				<tr>
					<th>Rank</th>
					<th>Team Name</th>
					<th>Task</th>
					<th>University</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>1</td>
					<td>Annihilators</td>
					<td>jhlilk22@yahoo.com</td>
					<td>No</td>
				</tr>
				<tr>
					<td>2</td>
					<td>Chernobyl</td>
					<td>jamieharingonton@yahoo.com</td>
					<td>Yes</td>
				</tr>
				<tr>
					<td>3</td>
					<td>Lethal</td>
					<td>jilsewris22@yahoo.com</td>
					<td>Yes</td>
				</tr>
			</tbody>
		</table>
	);
}

function Team(props) {
	return (
		<div>
			<div class="ui card w-100">
				<div class="content">
					<div class="header">Team Name</div>
				</div>
				<div class="content">
					<div class="ui right action input">
						<input type="text" value="Chernobyl" />
						<button class="ui teal button">Save Team Name</button>
					</div>
				</div>
			</div>
			<div class="ui card w-100">
				<div class="content d-flex justify-content-between align-items-center">
					<div class="header d-inline-block">Team Members</div>
					<div className="d-inline-block ml-auto">
						<div class="ui action left icon input">
							<i class="search icon"></i>
							<input type="text" placeholder="Add Team Member" />
							<div class="ui teal button">Add</div>
						</div>
					</div>
				</div>
				<div class="content">
					<table class="ui very basic table">
						<thead>
							<tr>
								<th>Name</th>
								<th>Title</th>
								<th>Status</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>John</td>
								<td>Leader</td>
								<td>Joined</td>
							</tr>
							<tr>
								<td>Jamie</td>
								<td>None</td>
								<td>Pending</td>
							</tr>
							<tr>
								<td>Jill</td>
								<td>None</td>
								<td>Pending</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
