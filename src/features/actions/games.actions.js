/**
 *
 * Games action 
 *
 */
import { action } from 'typesafe-actions';
import ActionTypes from '../constants/games.constants';

export const fetchGames = () => {
	return action(ActionTypes.FETCH_GAMES.request);
};
export const fetchCategories = () => {
	return action(ActionTypes.FETCH_CATEGORIES.request);
};

export const getGameToLaunch = (payload) => {
	return action(ActionTypes.GET_GAME_TO_LAUNCH.request, payload);
};
