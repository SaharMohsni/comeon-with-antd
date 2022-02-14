/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './game-card.scss';
import routes from '../../../app/routes/routes';
import { getGameToLaunch } from '../../../features/actions/games.actions';
const GameCard = ({ game }) => {
	const dispatch = useDispatch();

	const { icon, name, description, code } = game;
	const navigate = useNavigate();
	const handlePlayGame = () => {
		dispatch(getGameToLaunch(code));
		navigate(routes.GAME.linkPath(code));
	};
	return (
		<div className="game-card ">
			<div className="game-card__image-container">
				<img src={require(`../../../assets/${icon}`)} alt="game-image" />
			</div>
			<div className="game-card__details global-flex-column-h-any-v-between">
				<div className="game-card__details__data">
					<div className="game-card__details__data__name">{name}</div>
					<p className="game-card__details__data__description">{description}</p>
				</div>

				<div className="game-card__details__play-button global-button global-flex-h-end-v-any">
					<Button onClick={() => handlePlayGame()}>
						Play <RightOutlined />
					</Button>
				</div>
			</div>
		</div>
	);
};
GameCard.propTypes = {
	/**
     * Game
     */
	game: PropTypes.object.isRequired
};
export default GameCard;
