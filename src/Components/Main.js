import React from 'react'
import './Main.css';

const Main = () => {
    return (
        <div className="overallmain">
            <div className="bodydiv">
                <div className="title">
                    <h1 className="title1">Bem vindo,</h1>
                    <h1 className="title2">Roberto</h1>
                    <h3>Pressione para iniciar</h3>
                </div>
                
                <button className="iniciar">
                    <img className="icon" src="https://66.media.tumblr.com/9abd5c88fad0e64ec887e717dbe9f27b/293a47036c50ea80-d4/s250x400/f90a87b2bfb6b65f0e78b7e354a5e77411e91179.png"/>
                </button>
            </div>
        </div>
    );
};

export default Main;