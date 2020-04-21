import React, { Component } from "react";
import { connect } from "react-redux";
import { buyCake } from "../../actions/cakeAction";
import "./CakeContainer.scss";

class CakeContainer extends Component {
	render() {
		return (
			<div>
				<h1>Number of Cake {this.props.numOfCakes}</h1>
				<button onClick={this.props.buyCake}>Buy Cake</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		numOfCakes: state.cakeReducer.numOfCakes,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		buyCake: () => dispatch(buyCake()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
