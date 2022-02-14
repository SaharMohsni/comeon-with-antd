import axios from 'axios';
import { decryptToken } from '../../utils/localStorage.helper';
import { requestHeader, requestHeaderWithoutToken } from '../../utils/requestHeader';
import URL from '../constants/service.constants';

export const loginUser = async (body) => {
	const result = await axios.post(URL.baseApiUrl() + URL.auth.loginUser, { ...body }, requestHeaderWithoutToken);
	return result.data;
};

export const logoutUser = async (body) => {
	console.log('🚀 ~ file: auth.service.js ~ line 12 ~ logoutUser ~ body', body);
	const result = await axios.post(URL.baseApiUrl() + URL.auth.logoutUser, {
		...body
	});
	return result.data;
};
export const getPlayerDataFromToken = async () => {
	const playerUsername = decryptToken(localStorage.getItem('token')).username;

	const result = await axios.post(
		URL.baseApiUrl() + URL.player.getConnectedPlayer,
		{ username: playerUsername },
		requestHeader({})
	);
	return result.data;
};
