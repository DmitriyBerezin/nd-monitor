import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import cianMonitor from './reducers'

import App from './containers/App.jsx'


const store = createStore(cianMonitor);

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("react-container")
);