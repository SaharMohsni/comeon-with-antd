import React from 'react';
import { InfoCircleOutlined } from '@ant-design/icons';

import './error-page.scss';
const ErrorPage = () => {
	return (
		<div className="error-page global-page-css global-flex-h-center-v-center">
			<InfoCircleOutlined />
			<div className="error-page__message">Server error</div>
		</div>
	);
};
export default ErrorPage;
