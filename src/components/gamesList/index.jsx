/* eslint-disable no-undef */
import React from 'react';
import GameCard from './gameCard';
import PropTypes from 'prop-types';
import { Empty } from 'antd';
import { isEmpty } from 'lodash';
import './games-list.scss';
import CategoryFilterSection from '../categoryFilterSection';
const GamesList = ({ gamesList, categoriesList, setFilterByCategoryId, filterByCategoryId }) => {
	// Render games
	const renderGames = () => {
		return gamesList.map((game) => {
			return <GameCard game={game} key={Math.random()} />;
		});
	};

	return (
		<div className="games-list">
			<div className="games-list__data">
				<h1 className="games-list__data__title">Games</h1>
				<div
					className={`games-list__data__content ${!isEmpty(gamesList)
						? 'global-flex-column-h-start-v-start'
						: 'global-flex-h-center-v-any'}`}
				>
					{!isEmpty(gamesList) ? (
						renderGames()
					) : (
						<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="No games with this filter" />
					)}
				</div>
			</div>
			<div className="games-list__filter-section">
				<CategoryFilterSection
					categoriesList={categoriesList}
					setFilterByCategoryId={setFilterByCategoryId}
					filterByCategoryId={filterByCategoryId}
				/>
			</div>
		</div>
	);
};
GamesList.propTypes = {
	/**
     * Game list
     */
	gamesList: PropTypes.array.isRequired,
	/**
     * Categories list
     */
	categoriesList: PropTypes.array.isRequired,
	/**
     * Get category filter data
     */
	setFilterByCategoryId: PropTypes.func,
	/**
     * filter key
     */
	filterByCategoryId: PropTypes.number
};

export default GamesList;
