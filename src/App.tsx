import React from 'react';
import './styles/app.scss';
import Header from './components/header/header'; 
import Hero from './components/hero/hero'; 
import About from './components/about/about';
import Portfolio from './components/portfolio/portfolio';
import Contact from './components/contact/contact';



const App: React.FC = () => {
    return (
        <div className="app">
            <Header />
            <Hero />
            <About />
            <Portfolio />
            <Contact />
        </div>
    );
};

export default App;
