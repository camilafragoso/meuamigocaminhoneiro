import React from 'react'
import './Login.css';

const Main = () => {
    return (
        <div>
            <header>
                <img className="logo"
                src="https://66.media.tumblr.com/58a922a53e0b7173e3a71414a5da6d19/07849764433ec5c0-35/s540x810/cb3990785fae4d6fa64be61c88ed8f8d3c1f4753.png"/>
            </header>
            <div className="bodydiv">
                <h2>Pressione para iniciar</h2>
                <button className="iniciar">Iniciar</button>
            </div>
        </div>
    );
};

export default Main;