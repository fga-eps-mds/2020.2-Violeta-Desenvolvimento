import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    USER_LOADED_SUCCESS,
    USER_LOADED_FAIL,
    AUTH_SUCCESS,
    AUTH_FAIL,
    LOGOUT,
} from '../actions/types';

const initialState = {
    token: localStorage.getItem('token'),
    refresh: localStorage.getItem('refresh'),
    isAuth: null,
    user: null,
};

export default function reducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case AUTH_SUCCESS:
            return {
                ...state,
                isAuth: true,
            };
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                isAuth: true,
                token: payload.token,
                refresh: payload.refresh,
            };
        case USER_LOADED_SUCCESS:
            return {
                ...state,
                user: payload,
            };
        case AUTH_FAIL:
            return {
                ...state,
                isAuth: false,
            };
        case USER_LOADED_FAIL:
            return {
                ...state,
                user: null,
            };
        case LOGIN_FAIL:
        case LOGOUT:
            localStorage.removeItem('token');
            localStorage.removeItem('refresh');
            return {
                ...state,
                token: null,
                refresh: null,
                isAuth: false,
                user: null,
            };
        default:
            return state;
    }
}
