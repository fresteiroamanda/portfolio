import React from 'react';
import './header.scss';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header__logo">Amanda Fresteiro</div>
            <nav className="header__nav">
                <a href="#about">About</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
};

export default Header;