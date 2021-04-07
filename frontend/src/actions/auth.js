import axios from 'axios';
import {
    LOGIN_SUCCESS,
    USER_LOADED_SUCCESS,
    USER_LOADED_FAIL,
    AUTH_SUCCESS,
    AUTH_FAIL,
    LOGOUT,
} from './types';

export const checkAuth = () => async (dispatch) => {
    if (localStorage.getItem('token')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        };

        const body = JSON.stringify({ token: localStorage.getItem('token') });

        try {
            const res = await axios.post(
                'http://localhost:8004/login/verificar',
                body,
                config
            );

            if (res.data.code !== 'token_not_valid') {
                dispatch({
                    type: AUTH_SUCCESS,
                });
            }
        } catch (err) {
            dispatch({
                type: AUTH_FAIL,
            });
        }
    } else {
        dispatch({
            type: AUTH_FAIL,
        });
    }
};

export const loadUser = () => async (dispatch) => {
    if (localStorage.getItem('token')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `JWT ${localStorage.getItem('token')}`,
                Accept: 'application/json',
            },
        };

        try {
            const res = await axios.get(
                'http://localhost:8004/login/id',
                config
            );

            dispatch({
                type: USER_LOADED_SUCCESS,
                payload: res.data,
            });
        } catch (err) {
            dispatch({
                type: USER_LOADED_FAIL,
            });
        }
    } else {
        dispatch({
            type: USER_LOADED_FAIL,
        });
    }
};

export const login = (username, senha) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const usuario = JSON.stringify({ username });
    const sen = JSON.stringify({ senha });

    try {
        console.log(usuario, sen);
        const res = await axios.post(
            'http://localhost:8004/autenticador/login/',
            { username: usuario, password: sen },
            config
        );

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
        });

        dispatch(loadUser());
    } catch (err) {
        console.log(err.response);
    }
};

export const logout = () => (dispatch) => {
    dispatch({
        type: LOGOUT,
    });
};
