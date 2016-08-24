import React, { PropTypes, Component } from 'react'

export default class CommandBar extends Component {
	render() {
		const { isRunning, onStartClick, onStopClick } = this.props;
		return (
			<div>
				<button onClick={onStartClick} disabled={isRunning}>Start</button>
				<button onClick={onStopClick} disabled={!isRunning}>Stop</button>
			</div>
		)
	}
}

CommandBar.propTypes = {
	isRunning: PropTypes.bool.isRequired,
	onStartClick: PropTypes.func.isRequired,
	onStopClick: PropTypes.func.isRequired
};