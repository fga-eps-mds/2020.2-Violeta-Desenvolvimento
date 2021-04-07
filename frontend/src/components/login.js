import React, { useState } from 'react';
import '../css/login.css';
import { connect } from 'react-redux';
import { login } from '../actions/auth';

const Login = () => {
    const [formData, setFormData] = useState({
        text: '',
        password: '',
    });

    const { username, senha } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();

        login(username, senha);
    };

    return (
        <div id="login-container">
            <div class="login">
                <h1>Login</h1>
                <form onSubmit={(e) => onSubmit(e)}>
                    <input
                        class="input"
                        type="text"
                        placeholder="username"
                        value={username}
                        onChange={(e) => onChange(e)}
                        required
                    />
                    <input
                        class="input"
                        type="password"
                        placeholder="password"
                        value={senha}
                        onChange={(e) => onChange(e)}
                        required
                    />
                    <button
                        class="btn-login"
                        type="submit"
                        onClick={login(username, senha)}
                    >
                        Entrar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default connect(null, { login })(Login);
