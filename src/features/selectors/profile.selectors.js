/**
 * Products selectors
 */
import { createSelector } from 'reselect';

export const selectLoginErrors = createSelector(
	(state) => state.profile,
	(profile) => profile.local.errors.loginErrors
);

export const selectUserInfo = createSelector((state) => state.profile, (profile) => profile.data.userInfo);
export const selectSignedInStatus = createSelector((state) => state.profile, (profile) => profile.local.isSignedIn);
export const selectProfileErrors = createSelector((state) => state.profile, (profile) => profile.local.errors);
