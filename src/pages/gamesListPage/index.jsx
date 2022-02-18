import React, { useState, useEffect } from 'react';
import { isEmpty } from 'lodash';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import GamesList from '../../components/gamesList';
import { selectCategoriesList, selectGamesList } from '../../features/selectors/games.selectors';
import GamesPagesHeader from '../../shared/components/gamesPagesHeader';

import './game-list-page.scss';
import { fetchCategories, fetchGames } from '../../features/actions/games.actions';

const GameListPage = () => {
	const gamesList = useSelector(selectGamesList);
	const categoriesList = useSelector(selectCategoriesList);
	const [ filterByCategoryId, setFilterByCategoryId ] = useState(null);
	const [ filterByGameName, setFilterByGameName ] = useState('');
	const [ filteredGamesList, setFilteredGamesList ] = useState([]);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchGames());
		dispatch(fetchCategories());
	}, []);

	useEffect(
		() => {
			if (gamesList && isEmpty(gamesList.length) && isEmpty(filterByGameName) && !filterByCategoryId) {
				setFilteredGamesList(gamesList);
			} else {
				filterGamesList(filterByGameName, filterByCategoryId);
			}
		},
		[ gamesList, filterByGameName, filterByCategoryId ]
	);

	//Filter Games By Category
	const filterGameListByCategory = (categoryId) => {
		let newGamesList = [];
		console.log(filteredGamesList);

		gamesList.forEach((game) => {
			if (game.categoryIds.includes(categoryId)) {
				newGamesList.push(game);
			}
		});
		setFilteredGamesList(newGamesList);
	};

	//Filter Games By name
	const filterGamesByGameName = (value) => {
		let newGamesList = [];
		if (!isEmpty(value)) {
			gamesList.forEach((game) => {
				if (game.name.toLowerCase().includes(value.toLowerCase())) {
					newGamesList.push(game);
				}
			});
			setFilteredGamesList(newGamesList);
		}
	};

	//Filter Games List
	const filterGamesList = (inputValue, gameCategoryId) => {
		let newGamesList = [];
		if (!isEmpty(inputValue) && !gameCategoryId) {
			return filterGamesByGameName(inputValue);
		}
		if (isEmpty(inputValue) && gameCategoryId) {
			return filterGameListByCategory(gameCategoryId);
		}

		return gamesList.forEach((game) => {
			if (
				game.name.toLowerCase().includes(inputValue.toLowerCase()) &&
				game.categoryIds.includes(gameCategoryId)
			) {
				newGamesList.push(game);
			}
			setFilteredGamesList(newGamesList);
		});
	};

	return (
		<div className="game-list-page-container global-page-css">
			<GamesPagesHeader setFilterByGameName={setFilterByGameName} />
			<GamesList
				gamesList={filteredGamesList}
				categoriesList={categoriesList}
				setFilterByCategoryId={setFilterByCategoryId}
				filterByCategoryId={filterByCategoryId}
			/>
		</div>
	);
};

export default GameListPage;
