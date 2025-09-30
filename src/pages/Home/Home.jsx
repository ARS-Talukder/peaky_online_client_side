import React, { useEffect } from 'react';
import Categories from './Categories/Categories';
import Slider from './Slider/Slider';
import Products from './Products/Products';
import SpecialProducts from './SpecialProducts/SpecialProducts';

const Home = () => {

    return (
        <div>
            <div className='px-0 lg:px-24 md:px-8'>
                <Slider></Slider>
            </div>
            <div className='px-5 lg:px-24 md:px-8'>
                <Categories></Categories>
                <SpecialProducts></SpecialProducts>
                <Products></Products>
            </div>
        </div>
    );
};

export default Home;