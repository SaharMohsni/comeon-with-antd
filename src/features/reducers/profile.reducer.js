/* eslint-disable no-case-declarations */
/*
 *
 * Profile reducer
 *
 */
import produce from 'immer';
import { hasToken } from '../../utils/access-token';
import ActionTypes from '../constants/profile.constants';

const initialLocal = {
	isSignedIn: hasToken(),
	loading: {
		loginLoading: false,
		logoutLoading: false,
		getPlayerDataFromTokenLoading: false
	},
	errors: {
		loginErrors: '',
		logoutErrors: '',
		getPlayerDataFromTokenErrors: ''
	}
};

export const initialState = {
	local: initialLocal,
	data: {
		userInfo: {}
	}
};

/* eslint-disable default-case, no-param-reassign */
const profileReducer = (state = initialState, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			//Login
			case ActionTypes.LOGIN_USER.request:
				draft.local.loading.loginLoading = true;
				draft.local.errors.loginErrors = '';
				break;
			case ActionTypes.LOGIN_USER.success:
				draft.local.loading.loginLoading = false;
				localStorage.setItem('token', action.data.access_token);
				draft.local.isSignedIn = true;
				draft.data.userInfo = { ...action.data.player, username: action.data.username };
				break;
			case ActionTypes.LOGIN_USER.failure:
				draft.local.loading.loginLoading = false;
				draft.local.errors.loginErrors = action.error;
				break;

			// Logout
			case ActionTypes.LOGOUT_USER.request:
				draft.local.loading.logoutLoading = true;
				draft.local.errors.logoutErrors = '';
				break;
			case ActionTypes.LOGOUT_USER.success:
				draft.local.loading.logoutLoading = false;
				localStorage.removeItem('token');

				draft.local.isSignedIn = false;
				draft.data.userInfo = {};
				break;
			case ActionTypes.LOGOUT_USER.failure:
				draft.local.loading.logoutLoading = false;
				draft.local.errors.logoutErrors = action.error;
				break;

			case ActionTypes.CLEAR_LOGIN_FORM_ERRORS.success:
				draft.local.errors.loginErrors = '';
				break;
			//Get player data from token
			case ActionTypes.GET_PLAYER_DATA_FROM_TOKEN.request:
				draft.local.loading.getPlayerDataFromTokenLoading = true;
				draft.local.errors.getPlayerDataFromTokenErrors = '';
				break;
			case ActionTypes.GET_PLAYER_DATA_FROM_TOKEN.success:
				draft.local.loading.getPlayerDataFromTokenLoading = false;
				draft.data.userInfo = { ...action.data.player, username: action.data.username };

				break;
			case ActionTypes.GET_PLAYER_DATA_FROM_TOKEN.failure:
				draft.local.loading.getPlayerDataFromTokenLoading = false;
				draft.local.errors.getPlayerDataFromTokenErrors = action.error;
				break;
		}
	});

export default profileReducer;
