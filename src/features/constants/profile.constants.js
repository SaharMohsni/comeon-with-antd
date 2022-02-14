/*
 *
 * Profile constants
 *
 */

import { generateActionTypes } from '../../utils/generic-saga';

const root = 'app/Profile/';
const LOGIN_USER = generateActionTypes(root, 'LOGIN_USER');
const LOGOUT_USER = generateActionTypes(root, 'LOGOUT_USER');
const CLEAR_LOGIN_FORM_ERRORS = generateActionTypes(root, 'CLEAR_LOGIN_FORM_ERRORS');
const GET_PLAYER_DATA_FROM_TOKEN = generateActionTypes(root, 'GET_PLAYER_DATA_FROM_TOKEN');
export default {
	LOGIN_USER,
	LOGOUT_USER,
	CLEAR_LOGIN_FORM_ERRORS,
	GET_PLAYER_DATA_FROM_TOKEN
};
