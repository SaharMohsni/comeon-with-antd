import React, { useEffect } from 'react';
import { Button } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import routes from '../../app/routes/routes';
import './game-page.scss';
import { selectLaunchedGame } from '../../features/selectors/games.selectors';
import { fetchGames } from '../../features/actions/games.actions';
import GamesPagesHeader from '../../shared/components/gamesPagesHeader';
const GamePage = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const launchedGame = useSelector(selectLaunchedGame);

	useEffect(() => {
		dispatch(fetchGames());
	}, []);

	const handleGoBack = () => navigate(routes.GAMES_LIST.path);
	window.comeon = window.comeon || {};

	useEffect(() => {
		window.comeon.game.launch(launchedGame.code.toLowerCase());
	}, []);

	return (
		<div className="game-page global-page-css ">
			<div className="game-page__header">
				<GamesPagesHeader />
			</div>

			<div className="global-button">
				<Button icon={<LeftOutlined />} onClick={() => handleGoBack()}>
					Back to games list
				</Button>
			</div>
			<div id="game-launch" className="game-page__launched-game global-flex-h-center-v-any" />
			<div className="game-page__details">
				<div className="game-page__details__name">{launchedGame.name}</div>
				<p className="game-page__details__description">{launchedGame.description}</p>
			</div>
		</div>
	);
};

export default GamePage;
