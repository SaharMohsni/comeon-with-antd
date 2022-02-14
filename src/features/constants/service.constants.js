/**
 *
 * Services constants : URL
 *
 */

const URL = {
	baseApiUrl: () => 'http://localhost:3001',
	auth: {
		loginUser: '/login',
		logoutUser: '/logout'
	},
	player: {
		getConnectedPlayer: '/connected-player'
	},
	games: {
		fetchGames: () => `/games`,
		fetchCategories: () => `/categories `
	}
};
export default URL;
