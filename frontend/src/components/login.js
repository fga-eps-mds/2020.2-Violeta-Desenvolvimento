import React, { useState } from 'react';
import '../css/login.css';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login } from '../actions/auth';

const Login = ({ login }) => {
    const [formData, setFormData] = useState({
        text: '',
        password: '',
    });

    const { username, senha } = formData;

    const history = useHistory();

    if (localStorage.getItem('access') !== null) {
        history.push('/login/adm');
    }

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    async function onSubmit(e) {
        e.preventDefault();
        await login(username, senha);
        if (localStorage.getItem('access') !== null) {
            history.push('/login/adm');
        } else {
            alert('Usuário inválido!');
        }
    }

    return (
        <div id="login-container">
            <div class="login">
                <h1>Login</h1>
                <form onSubmit={(e) => onSubmit(e)}>
                    <input
                        class="input"
                        type="text"
                        name="username"
                        placeholder="username"
                        value={username}
                        onChange={(e) => onChange(e)}
                        required
                    />
                    <input
                        class="input"
                        type="password"
                        name="senha"
                        placeholder="senha"
                        value={senha}
                        onChange={(e) => onChange(e)}
                        required
                    />
                    <button class="btn-login" type="submit">
                        Entrar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default connect(null, { login })(Login);
