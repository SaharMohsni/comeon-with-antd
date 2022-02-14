export const getGameToLaunchData = (data, code) => {
	return data.find((el) => el.code === code);
};
