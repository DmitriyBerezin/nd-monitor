import React, { PropTypes, Component } from 'react'

export default class CommandBar extends Component {
	render() {
		return (
			<div>
				<button disabled={this.props.isRunning}>Start</button>
				<button disabled={!this.props.isRunning}>Stop</button>
			</div>
		)
	}
}

CommandBar.propTypes = {
	isRunning: PropTypes.bool.isRequired
};