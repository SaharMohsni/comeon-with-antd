import axios from 'axios';
import { requestHeader } from '../../utils/requestHeader';
import URL from '../constants/service.constants';

export const fetchGames = async () => {
	const result = await axios.get(URL.baseApiUrl() + URL.games.fetchGames(), requestHeader({}));
	return result.data;
};

export const fetchCategories = async () => {
	const result = await axios.get(URL.baseApiUrl() + URL.games.fetchCategories(), requestHeader({}));
	return result.data;
};

export const loadGame = async (gameName) => {
	const result = await axios.get(`comeon.game.launch(${gameName})`);

	return result.data;
};
