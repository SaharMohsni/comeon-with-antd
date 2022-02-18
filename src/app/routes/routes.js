import Authentication from '../../pages/authentication';
import GamesList from '../../pages/gamesListPage';
import GamePage from '../../pages/gamePage';
import ErrorPage from '../../shared/components/errorPage';
export default {
	LOGIN_OR_REGISTER: {
		path: '/',
		component: Authentication
	},
	GAMES_LIST: {
		path: '/games-list',
		component: GamesList
	},
	GAME: {
		path: '/games-list/:code',
		linkPath: (code) => `/games-list/${code}`,
		component: GamePage
	},
	ERRORS: {
		path: '/400',
		component: ErrorPage
	}
};
