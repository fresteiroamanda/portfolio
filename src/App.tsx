import React from 'react';
import './styles/app.scss';
import Header from './components/header/header'; 
import Hero from './components/hero/hero'; 


const App: React.FC = () => {
    return (
        <div className="app">
            <Header />
            <Hero />

        </div>
    );
};

export default App;
