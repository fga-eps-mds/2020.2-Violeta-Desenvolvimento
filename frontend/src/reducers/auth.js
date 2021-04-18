import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from '../actions/types';

const initialState = {
    access: localStorage.getItem('access'),
    refresh: null,
    username: localStorage.getItem('username'),
};

export default function reducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case LOGIN_SUCCESS:
            localStorage.setItem('access', payload.access);
            localStorage.setItem('username', payload.username);
            return {
                ...state,
                access: payload.access,
                refresh: payload.refresh,
                username: payload.username,
            };
        case LOGIN_FAIL:
        case LOGOUT:
            localStorage.removeItem('access');
            localStorage.removeItem('username');
            return {
                ...state,
                access: null,
                refresh: null,
                username: null,
            };
        default:
            return state;
    }
}
