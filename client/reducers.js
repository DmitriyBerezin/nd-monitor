import * as ActionTypes from './actions/action-types'

const initialState = {
	isRunning: false
};

export default function cianMonitor(state = initialState, action) {
	switch (action.type) {
		case ActionTypes.ACTION_START_SERVICE:
			return Object.assign({}, state, {
				isRunning: true
			});
		case ActionTypes.ACTION_STOP_SERVICE:
			return Object.assign({}, state, {
				isRunning: false
			});
		default:
			return state;
	}
}