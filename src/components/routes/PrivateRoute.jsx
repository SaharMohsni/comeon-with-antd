import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectSignedInStatus } from '../../features/selectors/profile.selectors';

const PrivateRoute = () => {
	const isSigned = useSelector(selectSignedInStatus);
	return isSigned ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
