import { isEmpty } from 'lodash';

export const getErrors = (errors) => {
	const errorsArray = Object.values(errors);
	return errorsArray;
};

export const isErrorExist = (arrays) => {
	if (!isEmpty(arrays)) {
		let findEl = arrays.find((err) => !isEmpty(err));
		if (findEl) return true;
	}

	return false;
};
