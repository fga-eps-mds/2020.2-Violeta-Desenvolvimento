import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from './types';

export const login = (username, password) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const body = JSON.stringify({ username, password });

    try {
        const res = await axios.post(
            'http://localhost:8004/autenticador/autenticador/login/',
            body,
            config
        );

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
        });
    } catch (err) {
        console.log(body);
        dispatch({
            type: LOGIN_FAIL,
        });
        console.log(err.response);
    }
};

export const logout = () => (dispatch) => {
    dispatch({
        type: LOGOUT,
    });
};
