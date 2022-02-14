import jwt from 'jwt-decode'; // import dependency
/* Decryption of critical data, mainly for browser local storage usage (e.g. user profile storage) */
export const decryptToken = (token) => jwt(token);
