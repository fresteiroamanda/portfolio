import React from 'react';
import './hero.scss';

const Hero: React.FC = () => {
    return (
        <section className="hero">
            <h1>Hello, I'm Amanda Fresteiro</h1>
            <p>I'm a web developer specializing in modern web applications.</p>
            <a href="#portfolio" className="hero__button">View My Work</a>
        </section>
    );
};

export default Hero;