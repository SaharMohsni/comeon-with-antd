/*
 *
 * Games constants
 *
 */

import { generateActionTypes } from '../../utils/generic-saga';

const root = 'app/Games/';
const FETCH_GAMES = generateActionTypes(root, 'FETCH_GAMES');
const FETCH_CATEGORIES = generateActionTypes(root, 'FETCH_CATEGORIES');
const GET_GAME_TO_LAUNCH = generateActionTypes(root, 'GET_GAME_TO_LAUNCH');

export default {
	FETCH_GAMES,
	FETCH_CATEGORIES,
	GET_GAME_TO_LAUNCH
};
