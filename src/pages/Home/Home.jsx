import React, { useEffect } from 'react';
import Categories from './Categories/Categories';
import Slider from './Slider/Slider';
import Products from './Products/Products';

const Home = () => {

    return (
        <div className='px-5 lg:px-24 md:px-8'>
            <div className='mt-1'>
                <Slider></Slider>
            </div>
            <Categories></Categories>
            <Products></Products>
        </div>
    );
};

export default Home;