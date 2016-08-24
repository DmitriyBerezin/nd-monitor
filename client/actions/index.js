import fetch from 'isomorphic-fetch'

import * as ActionTypes from './action-types'


function startRequest() {
	return {
		type: ActionTypes.START_SERVICE_REQUEST
	};
}

function startSuccess() {
	return {
		type: ActionTypes.START_SERVICE_SUCCESS
	};
}

function startFailed() {
	return {
		type: ActionTypes.START_SERVICE_FAILURE
	};
}

export function startService() {
	return (dispatch) => {
		dispatch(startRequest());

		return fetch('/api/start').then(res => {
			if (res.status === 200) {
				dispatch(startSuccess())
			}
			else {
				alert(res.statusText);
			}
		});
	};
}



function stopRequest() {
	return {
		type: ActionTypes.STOP_SERVICE_REQUEST
	};
}

function stopSuccess() {
	return {
		type: ActionTypes.STOP_SERVICE_SUCCESS
	};
}

function stopFailed() {
	return {
		type: ActionTypes.STOP_SERVICE_FAILURE
	};
}

export function stopService() {
	return (dispatch) => {
		dispatch(stopRequest());

		return fetch('/api/stop').then(res => {
			if (res.status === 200) {
				dispatch(stopSuccess())
			}
			else {
				alert(res.statusText);
			}
		});
	};
}