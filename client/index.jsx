import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import cianMonitor from './reducers'
import thunk from 'redux-thunk'

import App from './containers/App.jsx'


const store = createStore(
	cianMonitor,
	applyMiddleware(thunk)
);

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("react-container")
);