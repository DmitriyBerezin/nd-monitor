import React, { Component } from 'react'
import { connect } from 'react-redux'

import CommandBar from '../components/CommandBar.jsx'

class App extends Component {
	render() {
		const { isRunning } = this.props
		return (
			<div>
				<CommandBar isRunning={isRunning} />
			</div>
		)
	}
}

function mapStateToProps (state) {
	return {
		isRunning: state.isRunning
	}
}

export default connect(mapStateToProps)(App)