import React from 'react';
import Header from '../parts/Header'
import Footer from '../parts/Footer'
import Trending from '../parts/TrendingPosts'
import Slider from '../parts/Slider'
import FreshStories from '../parts/FreshStories'
import Navbar from '../parts/Navbar'


const Home = () => {
    return (
        <>
        
        <Header/>
        <Navbar />
        <Slider/>
        <Trending/>
        <FreshStories/>
        <Footer/>
        </>
    );
};

export default Home;