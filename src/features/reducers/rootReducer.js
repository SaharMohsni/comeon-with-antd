/**
 *
 * Root reducer
 *
 */
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '../../utils/history';
import profileReducer from './profile.reducer';
import gamesReducer from './games.reducer';

const createReducer = (injectedReducers = {}) => {
	const rootReducer = combineReducers({
		profile: profileReducer,
		games: gamesReducer,
		router: connectRouter(history),
		...injectedReducers
	});

	return rootReducer;
};
export default createReducer;
