import { isEmpty } from 'lodash';

/***** Verify user token *****/
export const hasToken = () => {
	const token = localStorage.getItem('token');
	if (!isEmpty(token)) {
		return true;
	}
	return false;
};
