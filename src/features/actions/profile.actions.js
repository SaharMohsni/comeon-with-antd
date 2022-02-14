/**
 *
 * Profile action 
 *
 */
import { action } from 'typesafe-actions';
import ActionTypes from '../constants/profile.constants';

export const loginUser = (payload) => {
	return action(ActionTypes.LOGIN_USER.request, payload);
};

export const logoutUser = (payload) => action(ActionTypes.LOGOUT_USER.request, payload);

export const clearLoginFormErrors = () => action(ActionTypes.CLEAR_LOGIN_FORM_ERRORS.request);
export const getPlayerDataFromToken = (payload) => action(ActionTypes.GET_PLAYER_DATA_FROM_TOKEN.request, payload);
