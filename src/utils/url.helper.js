import parseUrl from 'url-parse';

export const setUrlPath = (url, path) => {
	const parsedUrl = parseUrl(url, true);
	parsedUrl.set('pathname', path);
	return parsedUrl.toString();
};

// get navigation pathname
export const getURLCleanPath = (pathname) => pathname.split('/')[2];
