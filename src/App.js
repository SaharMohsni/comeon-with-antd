import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Routes, Route } from 'react-router-dom';
import './App.scss';

import routes from './app/routes/routes';
import GamePage from './pages/gamePage';
import Authentication from './pages/authentication';
import GameListPage from './pages/gamesListPage';
import Layout from './app/Layout';
import { getPlayerDataFromToken } from './features/actions/profile.actions';
import PrivateRoute from './components/routes/PrivateRoute';
import ErrorPage from './shared/components/errorPage';
function App() {
	const dispatch = useDispatch();
	let token = localStorage.getItem('token');
	useEffect(
		() => {
			if (token) {
				dispatch(getPlayerDataFromToken());
			}
		},
		[ token ]
	);

	return (
		<div className="app">
			<Layout>
				<Routes>
					<Route exact path={routes.LOGIN_OR_REGISTER.path} element={<Authentication />} />;
					<Route exact path={routes.GAMES_LIST.path} element={<PrivateRoute />}>
						<Route exact path={routes.GAMES_LIST.path} element={<GameListPage />} />
					</Route>
					<Route exact path={routes.GAME.path} element={<PrivateRoute />}>
						<Route exact path={routes.GAME.path} element={<GamePage />} />
					</Route>
					<Route exact path={routes.ERRORS.path} element={<ErrorPage />} />
				</Routes>
			</Layout>
		</div>
	);
}

export default App;
