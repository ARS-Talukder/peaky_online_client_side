import React from 'react';
import Categories from './Categories/Categories';
import Slider from './Slider/Slider';
import Products from './Products/Products';

const Home = () => {
    return (
        <div>
            <Categories></Categories>
            <div className='px-5 lg:px-24 md:px-8'>
                <Slider></Slider>
                <Products></Products>
            </div>

        </div>
    );
};

export default Home;