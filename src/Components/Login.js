import React from 'react';
import './Login.css';


const Login = () => {
    return (
        <div>
            <header className="header">
                <img className="logo"
                src="https://66.media.tumblr.com/58a922a53e0b7173e3a71414a5da6d19/07849764433ec5c0-35/s540x810/cb3990785fae4d6fa64be61c88ed8f8d3c1f4753.png"/>
            </header>
            <div className="body">
                <div className="box">
                    <h2>Login</h2>
                    <input className="input" type="text" placeholder="Usuário"/>
                    <input className="senha" type="text" placeholder="Senha"/>
                    <button className="botao">ENTRAR</button>
                </div>
            <div className="end">
                <a href="www.google.com" className="link">Você é novo? Cadastre-se!</a>
            </div>
            </div>
        </div>
    );
};
export default Login;
