import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
// import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { searchPets, requestPets } from './reducers';
import 'tachyons';

// logger from 'redux-logger' is a middleware that allows us to view actions in the console
// rootReducer will be the combination of all reducers
// applyMiddleware from 'redux' allows us to insert middleware into application
// thunkMiddleware from 'redux-thunk' allow us to handle async actions
// const logger = createLogger();
const rootReducer = combineReducers({ searchPets, requestPets });
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// Provider component from 'react-redux' handles passing down the store
// to all components down the component tree of App
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

serviceWorker.unregister();
