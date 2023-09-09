// actions.js
import { LOGIN, LOGOUT } from '../actionEnum/actionTypes';

export const login = (user) => {
    return {
        type: LOGIN,
        payload: user, // You can pass user data or token here
    };
};

export const logout = () => {
    return {
        type: LOGOUT,
    };
};
