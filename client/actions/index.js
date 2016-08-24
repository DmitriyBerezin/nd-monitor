
import * as ActionTypes from './action-types'

export function startService() {
	return { type: ActionTypes.ACTION_START_SERVICE };
}

export function stopService() {
	return { type: ActionTypes.ACTION_STOP_SERVICE };
}