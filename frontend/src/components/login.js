import React from 'react';
import '../css/login.css';

const Login = () => (
    <div id="login-container">
        <div class="login">
            <h1>Login</h1>
            <input placeholder="username" class="input" />
            <input placeholder="senha" class="input" />
            <button type="button" class="btn-login">
                Entrar
            </button>
        </div>
    </div>
);

export default Login;
