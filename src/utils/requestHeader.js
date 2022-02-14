import moment from 'moment';

export const requestHeaderWithoutToken = () => {
	return {
		headers: {
			'Accept-Language': `en-US`,
			'Access-Control-Allow-Origin': '*',
			'X-Timezone': `${moment().utcOffset()}`,
			Origin: window.location.origin,
			Accept: 'application/json',
			'Content-Type': 'application/json'
		}
	};
};

export const requestHeader = (options) => ({
	headers: {
		// 'Access-Control-Allow-Origin': '*',
		...options
	}
});
