import React from 'react';
import './portfolio.scss';

const Portfolio: React.FC = () => {
    return (
        <section className="portfolio" id="portfolio">
            <h2>My Work</h2>
            <div className="portfolio__items">
                <div className="portfolio__item">Project 1</div>
                <div className="portfolio__item">Project 2</div>
                <div className="portfolio__item">Project 3</div>
            </div>
        </section>
    );
};

export default Portfolio;