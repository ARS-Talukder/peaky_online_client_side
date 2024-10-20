import React from 'react';
import Categories from './Categories/Categories';
import Slider from './Slider/Slider';
import Products from './Products/Products';

const Home = () => {
    return (
        <div>
            <Categories></Categories>
            <Slider></Slider>
            <Products></Products>

        </div>
    );
};

export default Home;