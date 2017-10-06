import React from "react";
import ReactDom from "react-dom";

import { createStore, combineReducers, applyMiddleware } from 'redux';
import {Provider} from "react-redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import {myReducer} from "./reducers/myReducer";
import App from "./containers/app";

const middleware = applyMiddleware(logger,thunk);

var reducers = {
	myReducer : myReducer
}

var store = createStore(combineReducers(reducers),middleware);

ReactDom.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
);

