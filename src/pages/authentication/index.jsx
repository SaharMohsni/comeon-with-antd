import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import LoginForm from '../../components/authentication/LoginForm';
import { selectSignedInStatus } from '../../features/selectors/profile.selectors';
import './authentication.scss';

const Authentication = () => {
	const isSigned = useSelector(selectSignedInStatus);
	return (
		<div className="authentication global-flex-h-center-v-center">
			{isSigned ? <Navigate to="/games-list" /> : <LoginForm />}
		</div>
	);
};

export default Authentication;
