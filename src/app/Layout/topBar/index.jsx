import React from 'react';
import './topBar.scss';
import logo from '../../../assets/images/logo.svg';
const TopBar = () => {
	return (
		<div className="top-bar global-page-padding-left-right global-flex-h-center-v-center">
			<img className="top-bar__log" src={logo} alt="logo" />
		</div>
	);
};

export default TopBar;
