import React from "react";
import { Route, Redirect, Router, Switch } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import createHashHistory from 'history/createHashHistory';

import {connect} from "react-redux";

import MyContainer from "../containers/myContainer";

var history = createHashHistory();

export default class App extends React.Component {
	constructor() {
		super();
	}

	render() {
		return(
			<Router history={history}>
				<Switch>
					<Route exact path="/" component={MyContainer}/>
				</Switch>
			</Router>
		)
	}
}