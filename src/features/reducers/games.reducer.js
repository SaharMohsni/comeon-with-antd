/* eslint-disable no-case-declarations */
/*
 *
 * Games reducer
 *
 */
import produce from 'immer';
import ActionTypes from '../constants/games.constants';
import { getGameToLaunchData } from './games.reducer.helper';

const initialLocal = {
	launchedGame: {},
	loading: {
		fetchGamesLoading: false,
		fetchCategoriesLoading: false
	},
	errors: {
		fetchGamesErrors: '',
		fetchCategoriesErrors: ''
	}
};

export const initialState = {
	local: initialLocal,
	data: {
		gamesList: [],
		categoriesList: []
	}
};

/* eslint-disable default-case, no-param-reassign */
const gamesReducer = (state = initialState, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			//Fetch games
			case ActionTypes.FETCH_GAMES.request:
				draft.local.loading.fetchGamesLoading = true;
				draft.local.errors.fetchGamesErrors = '';
				break;
			case ActionTypes.FETCH_GAMES.success:
				draft.local.loading.fetchGamesLoading = false;
				draft.data.gamesList = action.data;
				break;
			case ActionTypes.FETCH_GAMES.failure:
				draft.local.loading.fetchGamesLoading = false;
				draft.local.errors.fetchGamesErrors = action.e.response.data.error;
				break;
			//Fetch categories
			case ActionTypes.FETCH_CATEGORIES.request:
				draft.local.loading.fetchCategoriesLoading = true;
				draft.local.errors.fetchCategoriesErrors = '';
				break;
			case ActionTypes.FETCH_CATEGORIES.success:
				draft.local.loading.fetchCategoriesLoading = false;
				draft.data.categoriesList = action.data;
				break;
			case ActionTypes.FETCH_CATEGORIES.failure:
				draft.local.loading.fetchCategoriesLoading = false;
				draft.local.errors.fetchCategoriesErrors = action.e.response.data.error;
				break;
			//Get game to launch
			case ActionTypes.GET_GAME_TO_LAUNCH.success:
				draft.local.loading.fetchCategoriesLoading = false;
				draft.local.launchedGame = getGameToLaunchData(state.data.gamesList, action.payload);
				break;
		}
	});

export default gamesReducer;
