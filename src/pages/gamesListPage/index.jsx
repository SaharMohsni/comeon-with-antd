import { isEmpty } from 'lodash';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import GamesList from '../../components/gamesList';
import { useDispatch } from 'react-redux';
import { selectCategoriesList, selectGamesList } from '../../features/selectors/games.selectors';
import GamesPagesHeader from '../../shared/components/gamesPagesHeader';

import './game-list-page.scss';
import { fetchCategories, fetchGames } from '../../features/actions/games.actions';

const GameListPage = () => {
	const [ FilterByCategory, setFilterByCategory ] = useState(null);
	const [ filterByGameName, setFilterByGameName ] = useState('');

	const gamesList = useSelector(selectGamesList);
	const categoriesList = useSelector(selectCategoriesList);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchGames());
		dispatch(fetchCategories());
	}, []);
	const filterGamesList = () => {
		if (FilterByCategory === null && isEmpty(filterByGameName)) {
			return gamesList;
		}
		if (FilterByCategory === null && !isEmpty(filterByGameName)) {
			return gamesList.filter((game) => game.name.toLowerCase().includes(filterByGameName.toLowerCase()));
		}
		if (FilterByCategory !== null && isEmpty(filterByGameName)) {
			return gamesList.filter((game) => {
				return game.categoryIds.includes(FilterByCategory);
			});
		}
		if (FilterByCategory !== null && !isEmpty(filterByGameName)) {
			return gamesList
				.filter((game) => game.name.toLowerCase().includes(filterByGameName.toLowerCase()))
				.filter((game) => {
					return game.categoryIds.includes(FilterByCategory);
				});
		}
	};

	return (
		<div className="game-list-page-container global-page-css">
			<GamesPagesHeader setFilterBy={setFilterByGameName} />
			<GamesList
				gamesList={filterGamesList()}
				categoriesList={categoriesList}
				setFilterBy={setFilterByCategory}
				filterByKey={FilterByCategory}
			/>
		</div>
	);
};

export default GameListPage;
