import React from 'react';
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { useCart, useDispatchCart } from '../../../../ContextReducer';
import toast from 'react-hot-toast';

const ProductDescription = ({ product }) => {
    const { _id, name, price, discount, category, images, description, productColor, size, whyBest } = product;
    const discount_price = price - ((discount * price) / 100);
    const img = images[0]?.url;

    const handleOrderNow = async () => {
        await dispatch({ type: "ADD", product_id: _id, name: name, category: category, img: img, price: price, discount: discount, discount_price: discount_price, quantity: 1 });
        toast.success('Added to the cart')
        navigate('/cart', { state: product })

        // Pushing Data to the Data Layer for Google data manager(GTM)
        window.dataLayer.push({
            event: 'order_now',
            ecommerce: {
                items: [{ product_id: _id, name: name, category: category, img: img, price: price, discount: discount, discount_price: discount_price, quantity: 1 }]
            },
            buttonText: 'Order Now',
            buttonClick: 'Clicked',
            pagePath: window.location.pathname,
        });

    }

    let productAdded = false;
    const navigate = useNavigate();
    let dispatch = useDispatchCart();
    let data = useCart();

    const handleAddToCart = async () => {
        await dispatch({ type: "ADD", product_id: _id, name: name, category: category, img: img, price: price, discount: discount, discount_price: discount_price, quantity: 1 });
        toast.success('Added to the cart');

        // Pushing Data to the Data Layer for Google data manager(GTM)
        window.dataLayer.push({
            event: 'add_to_cart',
            ecommerce: {
                items: [{ product_id: _id, name: name, category: category, img: img, price: price, discount: discount, discount_price: discount_price, quantity: 1 }]
            },
            buttonText: 'Add To Cart',
            buttonClick: 'Clicked',
            pagePath: window.location.pathname,
        });

    }

    if (data.length !== 0) {
        for (let i = 0; i < data.length; i++) {
            const data_id = data[i].product_id;
            if (data_id === _id) {
                productAdded = true
            }
        }
    }
    return (
        <div className='w-1/2'>
            <h2 className='text-3xl font-bold'>{name}</h2>
            <div className='flex text-2xl font-bold my-2'>
                <p className='flex items-center justify-center font-normal line-through decoration-2 mr-2 text-slate-400'>
                    <span className='text-xs'><small><FaBangladeshiTakaSign /></small></span>
                    <span>{price}</span>
                </p>
                <p className='flex justify-center items-center text-blue-700'>
                    <span className='text-xs'><small><FaBangladeshiTakaSign /></small></span>
                    <span>{discount_price}</span>
                </p>
            </div>

            <div className=''>
                <h3 className='text-xl font-bold my-1'><small>Why our products are the best?</small></h3>

                <ul className='text-slate-500 font-bold px-1'>
                    {
                        whyBest.map(w => <li key={w._id}><small><span className='mr-1'>✅</span>{w.text}</small></li>)
                    }
                </ul>
            </div>

            <div className='flex mt-6 font-bold'>
                {
                    productAdded === false ?
                        <button onClick={handleAddToCart} className='flex justify-center items-center w-full h-9 bg-sky-200 hover:bg-blue-100 text-blue-500 rounded'><span>Add To Cart</span></button>
                        :
                        <button className='flex justify-center items-center w-full h-9 bg-sky-200 text-blue-300 rounded' disabled><span>Added</span></button>
                }
                <button onClick={handleOrderNow} className='flex justify-center items-center w-full h-9 bg-blue-500 hover:bg-blue-600 text-white ml-4 rounded'><span>ORDER NOW</span></button>
            </div>

            <div className='w-full h-0.5 bg-slate-200 my-6'></div>

            <div className='flex'>
                <a href="https://api.whatsapp.com/send?phone=8801814728277" target='_blank' className='flex justify-center items-center w-full h-9 bg-green-200 hover:bg-green-600 text-green-600 hover:text-white border border-green-600 rounded' rel="noreferrer">
                    <span className='mx-1'><small><FaWhatsapp /></small></span>
                    <span>WHATSAPP</span>
                </a>

                <a href="tel:+8801814728277" className='flex justify-center items-center w-full h-9 bg-blue-100 hover:bg-blue-600 text-blue-600 hover:text-white border border-blue-600 rounded ml-4'>
                    <span className='mx-1'><small><FaPhone /></small></span>
                    <span>01814728277</span>
                </a>
            </div>
        </div>
    );
};

export default ProductDescription;