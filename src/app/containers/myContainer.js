import React from "react";
import ReactDom from "react-dom";
import {connect} from "react-redux";
import {myAction} from "../actions/myAction";

@connect((store) => {
	return {
		user: store.myReducer	
	}
})

export default class MyContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	search() {
		var searchInput = document.getElementById('search').value;
		this.props.dispatch(myAction(searchInput));
	}

	render() {
		var items = [];
		for (var i = 0; i < this.props.user.products.length; i++) {
			items.push(
			  	<dl>
				  <dt>{this.props.user.products[i].name}</dt>
				  <dd>{this.props.user.products[i].price}</dd>
				  <dd>{this.props.user.products[i].manufacturer}</dd>
				  <dd>{this.props.user.products[i].description}</dd>
				  <dd>{this.props.user.products[i].inStock}</dd>
				  <dd>{this.props.user.products[i].url}</dd>
				</dl>
			);
		}

		return(
			<div>
				<b>Search By Name of Product : </b>
				<input type="text" id="search" onChange={this.search.bind(this)}/>
				<h4>Products List :</h4>
				<div ref="list">{items}</div>
			</div>
		);
	}
}