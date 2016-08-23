
import * from './action-types.js'

export const startService() {
	return { type: ACTION_START_SERVICE };
}

export const stopService() {
	return { type: ACTION_STOP_SERVICE };
}