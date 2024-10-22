// src/components/Hero.tsx

import React from 'react';
import Constellation from '../../recicle/constellation/constellation';
import './hero.scss';

const Hero: React.FC = () => {
    return (
        <section className="hero">
            <div className="hero__background">
                <Constellation />
            </div>
            <div className="hero__content">
                <h1>Hello, I'm Amanda Fresteiro</h1>
                <p>I'm a web developer specializing in modern web applications.</p>
                <a href="#portfolio" className="hero__button">View My Work</a>
            </div>
        </section>
    );
};

export default Hero;