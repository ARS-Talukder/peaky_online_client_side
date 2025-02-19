import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import ProductSlider from './ProductSlider/ProductSlider';
import ProductDescription from './ProductDescription/ProductDescription';
import ProductOthers from './ProductOthers/ProductOthers';
import MoreProducts from './MoreProducts/MoreProducts';

const ProductDetails = () => {
    // const { state } = useLocation();
    // const product = state;
    // const { name, price, discount, category, img, img_2, img_3, descr } = product;
    // const discount_price = price - ((discount * price) / 100);

    // test purpose start
    const product = {
        name: "Set Menu",
        category: "Foods",
        price: 300,
        discount: 50,
        img: ["https://i.ibb.co.com/G2PRMP2/set-menu.jpg", "https://i.ibb.co.com/G2PRMP2/set-menu.jpg", "https://i.ibb.co.com/G2PRMP2/set-menu.jpg", "https://i.ibb.co.com/G2PRMP2/set-menu.jpg", "https://i.ibb.co.com/TTtVhz6/formal-shirt.jpg"]
    }
    // test purpose ends

    const navigate = useNavigate();

    const handleAddToCart = async () => {
        navigate('/cart', { state: product })

    }
    return (
        <div className='px-48'>
            <header className='text-slate-500 my-2'>
                <ul className='flex'>
                    <li><Link to='/' className='hover:text-slate-600'><small>Home</small></Link> <span className='mx-2'>/</span></li>
                    <li><Link to='/' className='hover:text-slate-600'><small>Home</small></Link> <span className='mx-2'>/</span></li>
                    <li><Link to='/' className='hover:text-slate-600'><small>Home</small></Link> <span className='mx-2'>/</span></li>
                </ul>
            </header>
            <section className='flex bg-gray-50 p-4'>
                <ProductSlider></ProductSlider>
                <ProductDescription></ProductDescription>
            </section>

            <section className='my-6 bg-gray-50'>
                <ProductOthers></ProductOthers>
            </section>

            <section className='my-6 bg-gray-50'>
                <MoreProducts></MoreProducts>
            </section>

        </div>
    );
};

export default ProductDetails;