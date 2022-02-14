import { put, call, takeEvery } from 'redux-saga/effects';
import * as api from '../services/games.service';
import ActionTypes from '../constants/games.constants';

//Fetch games
export function* fetchGames() {
	try {
		const results = yield call(api.fetchGames);
		yield put({
			type: ActionTypes.FETCH_GAMES.success,
			data: results
		});
	} catch (e) {
		yield put({ type: ActionTypes.FETCH_GAMES.failure, e });
	}
}

export function* fetchGamesWatcher() {
	yield takeEvery(ActionTypes.FETCH_GAMES.request, fetchGames);
}

//Fetch categories
export function* fetchCategories() {
	try {
		const results = yield call(api.fetchCategories);
		yield put({
			type: ActionTypes.FETCH_CATEGORIES.success,
			data: results
		});
	} catch (e) {
		yield put({ type: ActionTypes.FETCH_CATEGORIES.failure, e });
	}
}

export function* fetchCategoriesWatcher() {
	yield takeEvery(ActionTypes.FETCH_CATEGORIES.request, fetchCategories);
}

// Get game to launch
export function* getGameToLaunch(action) {
	try {
		yield put({
			type: ActionTypes.GET_GAME_TO_LAUNCH.success,
			payload: action.payload
		});
	} catch (e) {
		yield put({ type: ActionTypes.GET_GAME_TO_LAUNCH.failure, e });
	}
}

export function* getGameToLaunchWatcher() {
	yield takeEvery(ActionTypes.GET_GAME_TO_LAUNCH.request, getGameToLaunch);
}
