import * from './actions/action-types'

const initialState = {
	isStarted: false
};

export default function cianMonitor(state = initialState, action) {
	switch (action.type) {
		case ACTION_START_SERVICE:
			return Object.assign({}, state, {
				isStarted: true;
			});
		case ACTION_STOP_SERVICE:
			return Object.assign({}, state, {
				isStarted: false;
			});
		default:
			return state;
	}
}