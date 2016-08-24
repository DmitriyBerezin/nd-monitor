import * as ActionTypes from './actions/action-types'

const initialState = {
	isRunning: false
};

export default function cianMonitor(state = initialState, action) {
	switch (action.type) {
		case ActionTypes.START_SERVICE_REQUEST:
			return state;
		case ActionTypes.START_SERVICE_SUCCESS:
			return Object.assign({}, state, {
				isRunning: true
			});
		case ActionTypes.STOP_SERVICE_REQUEST:
			return state;
		case ActionTypes.STOP_SERVICE_SUCCESS:
			return Object.assign({}, state, {
				isRunning: false
			});
		default:
			return state;
	}
}