import React, { Component } from 'react'
import { connect } from 'react-redux'
import { startService, stopService } from '../actions/index'

import CommandBar from '../components/CommandBar.jsx'

class App extends Component {
	render() {
		return (
			<CommandBar {...this.props} />
		)
	}
}

function mapStateToProps(state) {
	return {
		isRunning: state.isRunning
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onStartClick: () => {
			dispatch(startService())
		},
		onStopClick: () => {
			dispatch(stopService())
		}
	}
}

const CianApp = connect(
	mapStateToProps,
	mapDispatchToProps
)(App)

export default CianApp