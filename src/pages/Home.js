import React from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';

const Home = () => {
    return (
        <div className='hero-wrapper'>
            <div className="stylesColor"></div>
            <div className="stylesColor2"></div>
            <div className='container mx-auto px-5 py-3'>
                <Header />
                <Hero />
            </div>
        </div>
    );
};

export default Home;