/* eslint-disable no-undef */
import React from 'react';
import { Avatar, Button, Input } from 'antd';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { LeftOutlined, SearchOutlined } from '@ant-design/icons';
import './games-pages-header.scss';

import { selectUserInfo } from '../../../features/selectors/profile.selectors';
import { isEmpty } from 'lodash';
import { logoutUser } from '../../../features/actions/profile.actions';

const GamesPagesHeader = ({ setFilterByGameName }) => {
	const dispatch = useDispatch();
	const playerInfo = useSelector(selectUserInfo);

	const handleLogOut = () => {
		if (!isEmpty(playerInfo)) {
			dispatch(logoutUser({ username: playerInfo.username }));
		}
	};
	const onSearch = (e) => setFilterByGameName(e.target.value);
	const renderPageContent = () => {
		if (!isEmpty(playerInfo)) {
			return (
				<div>
					<div className="games-pages-header__data-container global-flex-h-start-v-center">
						<Avatar
							size={{
								xs: 40,
								sm: 40,
								md: 40,
								lg: 64,
								xl: 64,
								xxl: 64
							}}
							src={require(`../../../assets/${playerInfo.avatar}`)}
						/>
						<div className="games-pages-header__data-container__player-details">
							<div className="games-pages-header__data-container__player-details__username">
								{playerInfo.name}
							</div>
							<div className="games-pages-header__data-container__player-details__last-event">
								{playerInfo.event}
							</div>
						</div>
					</div>
					<div className="games-pages-header__logout-button global-button">
						<Button icon={<LeftOutlined />} onClick={() => handleLogOut()}>
							Log out
						</Button>
					</div>
				</div>
			);
		}
		return <div />;
	};
	return (
		<div className="games-pages-header global-flex-h-between-v-start">
			{renderPageContent()}
			<div className="games-pages-header__filter-by-search">
				<Input placeholder="Search Game" suffix={<SearchOutlined />} onChange={(e) => onSearch(e)} />
			</div>
		</div>
	);
};
GamesPagesHeader.propTypes = {
	/**
     * Get category filter data
     */
	setFilterByGameName: PropTypes.func.isRequired
};
export default GamesPagesHeader;
