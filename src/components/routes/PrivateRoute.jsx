import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectProfileErrors, selectSignedInStatus } from '../../features/selectors/profile.selectors';
import { selectGamesErrors } from '../../features/selectors/games.selectors';
import { getErrors, isErrorExist } from '../../utils/errors.helper';

const PrivateRoute = () => {
	const isSigned = useSelector(selectSignedInStatus);
	const gamesErrors = useSelector(selectGamesErrors);
	const profileErrors = useSelector(selectProfileErrors);
	const handleRoutes = () => {
		if (isSigned) {
			if (isErrorExist(getErrors(gamesErrors)) || isErrorExist(getErrors(profileErrors))) {
				return <Navigate to="/400" />;
			}
			return <Outlet />;
		}
		return <Navigate to="/" />;
	};
	return handleRoutes();
};

export default PrivateRoute;
